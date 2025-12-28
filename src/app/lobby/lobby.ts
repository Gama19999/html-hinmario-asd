import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

import { environment } from '../../environments/environment';
import { ConfigService } from '../shared/services/config.service';
import { LookupService } from '../shared/services/lookup.service';
import { PlaylistService } from '../shared/services/playlist.service';
import { BtnConfig } from '../shared/svg/btns/btn-config';
import { Modal } from '../shared/component/modal/modal';
import { Logo } from '../shared/svg/logo/logo';
import { Result } from './result/result';
import { Screensaver } from '../shared/component/screensaver/screensaver';
import { FullScreenEvt, Theme } from '../shared/util/app.types';

@Component({
  selector: 'app-lobby',
  imports: [BtnConfig, Modal, Logo, Screensaver, NgClass, FormsModule, AsyncPipe],
  templateUrl: './lobby.html',
  styleUrl: './lobby.css',
})
export class Lobby implements OnInit, AfterViewInit, OnDestroy {
  private subs: Subscription[] = [];
  theme: Theme = 'light';
  playThough: boolean = true;
  fullscreen!: FullScreenEvt;
  displayCanSleep!: boolean;
  churchName!: string;
  appInfo = environment.appInfo;
  appContact = environment.appContact;
  enablePlaylistBtns: boolean = false;
  settingsHidden: boolean = true;
  screenSaverEnabled!: boolean;
  screenSaver$: Subject<boolean>;

  @ViewChild('searchField') searchField!: ElementRef<HTMLInputElement>;
  @ViewChild('foundList') foundList!: ElementRef;
  @ViewChild('resultList', { read: ViewContainerRef }) resultList!: ViewContainerRef;
  @ViewChild('queueEl') queueEl!: ElementRef<HTMLElement>;
  @ViewChild('queue', { read: ViewContainerRef }) queue!: ViewContainerRef;

  constructor(private configSrv: ConfigService, private lookupSrv: LookupService, private playSrv: PlaylistService, private router: Router) {
    this.screenSaver$ = configSrv.screenSaver$;
  }

  ngOnInit(): void {
    this.subs.push(this.configSrv.theme$.subscribe(val => this.theme = val));
    this.subs.push(this.configSrv.playThrough$.subscribe(val => this.playThough = val));
    this.subs.push(this.configSrv.fullscreen$.subscribe(val => this.fullscreen = val));
    this.subs.push(this.configSrv.displayCanSleep$.subscribe(val => this.displayCanSleep = val));
    this.subs.push(this.configSrv.churchName$.subscribe(val => this.churchName = val));
    this.subs.push(this.configSrv.screenSaverFeature$.subscribe(val => this.screenSaverEnabled = val));
    this.enablePlaylistBtns = this.playSrv.playlist.value.length > 0;
    this.configSrv.scheduleScreenSaver();
  }

  ngAfterViewInit(): void {
    this.subs.push(this.playSrv.playlist.subscribe(val => this.updateQueue(val)));
    this.searchField.nativeElement.focus();
  }

  private updateQueue(playlist: string[]) {
    this.queue.clear();
    let itemRef, itemEl;
    this.enablePlaylistBtns = playlist.length > 0;
    for (const num of playlist) {
      itemRef = this.queue.createComponent(Result);
      itemRef.instance.data = { number: num, title: '' };
      itemRef.instance.type = 'playlist';
      itemEl = itemRef.location.nativeElement as HTMLElement
      itemEl.tabIndex = -1;
      itemEl.dataset['number'] = num;
    }
  }

  lookup(evt: Event) {
    const found = this.lookupSrv.search((evt.target as HTMLInputElement).value.trim());
    this.resultList.clear();
    let itemRef, itemEl;
    for (const hymn of found) {
      itemRef = this.resultList.createComponent(Result);
      itemRef.instance.data = hymn;
      itemRef.instance.type = 'found';
      itemEl = itemRef.location.nativeElement as HTMLElement
      itemEl.tabIndex = -1;
      itemEl.dataset['number'] = hymn.number;
    }
  }

  searchKeyListener(evt: KeyboardEvent) {
    if (evt.key === 'ArrowDown') {
      evt.preventDefault();
      (this.foundList.nativeElement.firstElementChild as HTMLElement)?.focus();
    }
  }

  foundKeyListener(evt: KeyboardEvent) {
    evt.preventDefault();
    const items = Array.from(this.foundList.nativeElement.children) as HTMLElement[];
    const activeEl = document.activeElement as HTMLElement;
    const currentIndex = items.indexOf(activeEl);
    let nextIndex = currentIndex;
    switch (evt.code) {
      case 'ArrowDown': nextIndex = (currentIndex + 1) % items.length; break;
      case 'ArrowUp': nextIndex = (currentIndex - 1 + items.length) % items.length; break;
      case 'Escape': this.searchField.nativeElement.focus(); return;
      case 'Enter': this.startPlayback(activeEl.dataset['number'] ?? ''); return;
    }
    items[nextIndex].focus();
  }

  startPlayback(num?: string) {
    if (num) this.playSrv.startWith(num);
    this.router.navigate(['/player']);
  }

  addToPlayList(evt: Event) {
    evt.preventDefault();
    this.playSrv.addToPlaylist((evt.target as HTMLElement).dataset['number'] ?? '');
  }

  scrollPlaylist(evt: WheelEvent) {
    evt.preventDefault();
    this.queueEl.nativeElement.scrollLeft += evt.deltaY;
  }

  cancelPlaylist() { this.playSrv.clearPlaylist(); }

  closeSettings() {
    this.settingsHidden = true;
    this.searchField.nativeElement.focus();
    this.configSrv.updateChurchName(this.churchName);
  }

  toggleTheme() { this.configSrv.toggleDarkTheme(); }

  togglePlayThrough() { this.configSrv.togglePlayThrough(); }

  toggleFullScreen() {
    this.configSrv.toggleFullScreen('app');
    this.closeSettings();
  }

  toggleScreenSaverFeature() { this.configSrv.toggleScreenSaverFeature(); }

  toggleDisplayCanSleep() { this.configSrv.toggleDisplayCanSleep(); }

  @HostListener('mousemove')
  @HostListener('input')
  clearScreenSaver() {
    this.configSrv.clearScreenSaver();
    if (this.settingsHidden) this.searchField.nativeElement.focus();
    this.configSrv.scheduleScreenSaver();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
