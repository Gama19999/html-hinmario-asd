import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

import { ConfigService } from '../shared/services/config.service';
import { PlaylistService } from '../shared/services/playlist.service';
import { BtnState } from '../shared/svg/btns/btn-state';
import { BtnMute } from '../shared/svg/btns/btn-mute';
import { BtnBack } from '../shared/svg/btns/btn-back';
import { BtnTrack } from '../shared/svg/btns/btn-track';
import { Modal } from '../shared/component/modal/modal';
import { Result } from '../lobby/result/result';
import { Screensaver } from '../shared/component/screensaver/screensaver';
import { MediaState, Theme, TrackMode } from '../shared/util/app.types';
import * as mediaExt from '../shared/util/app.media-ext';

@Component({
  selector: 'app-player',
  imports: [BtnState, BtnMute, BtnBack, BtnTrack, Modal, Result, Screensaver, NgClass, AsyncPipe],
  templateUrl: './player.html',
  styleUrl: './player.css',
})
export class Player implements OnInit, AfterViewInit, OnDestroy {
  private subs: Subscription[] = [];
  theme!: Theme;
  playingNum: any;
  videoFile: any;
  state: MediaState = 'playing';
  trackMode: TrackMode = 'choir';
  mute: boolean = false;
  playlist$: BehaviorSubject<string[]>;
  screenSaver$: Subject<boolean>;
  
  @ViewChild('controls') controls!: ElementRef<HTMLElement>;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  constructor(private configSrv: ConfigService, private playSrv: PlaylistService, private titleSrv: Title, private router: Router) {
    this.playlist$ = playSrv.playlist;
    this.screenSaver$ = configSrv.screenSaver$;
  }

  ngOnInit(): void {
    this.subs.push(this.configSrv.theme$.subscribe(val => this.theme = val));
    this.prepareVideoFile();
  }

  private prepareVideoFile() {
    this.playingNum = this.playSrv.nextInPlaylist();
    if (!this.playingNum) this.goLobby();
    this.titleSrv.setTitle(this.titleSrv.getTitle().replace('{}', this.playingNum ?? ''));
    this.videoFile = `assets/video/${this.playingNum}.mp4`;
  }

  ngAfterViewInit(): void {
    this.controls.nativeElement.focus();
  }

  playNext() {
    this.prepareVideoFile();
    this.videoPlayer.nativeElement.load();
    this.configSrv.playThrough$.value ? this.videoPlayer.nativeElement.play() : this.videoPlayer.nativeElement.pause();
  }

  updateState() {
    this.state = this.videoPlayer.nativeElement.paused ? 'paused' : 'playing';
    this.callScreenSaver();
  }

  private callScreenSaver() { 
    if (this.state === 'paused') this.configSrv.scheduleScreenSaver();
    else this.configSrv.clearScreenSaver();
  }

  controlsListener(evt: KeyboardEvent) {
    switch (evt.code) {
      case 'KeyM': this.toggleMute(); return;
      case 'Space': this.toggleState(); return;
      case 'Backspace': this.goLobby(); return;
    }
  }

  toggleTrack() {
    if (mediaExt.videoHasMultipleTracks(this.videoPlayer.nativeElement)) {
      this.trackMode = this.trackMode === 'choir' ? 'music' : 'choir';
      mediaExt.enableTrack(this.videoPlayer.nativeElement, this.trackMode === 'choir' ? 'spa' : 'eng');
    }
  }

  toggleMute() {
    this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
    this.mute = this.videoPlayer.nativeElement.muted;
  }

  toggleState() {
    this.videoPlayer.nativeElement.paused ? this.videoPlayer.nativeElement.play() : this.videoPlayer.nativeElement.pause();
    this.controls.nativeElement.focus();
  }

  goLobby() { this.router.navigate(['/lobby'], { replaceUrl: true }); }

  @HostListener('mousemove')
  clearScreenSaver() {
    this.configSrv.clearScreenSaver();
    this.controls.nativeElement.focus();
    this.callScreenSaver();
  }

  ngOnDestroy(): void {
    this.videoPlayer.nativeElement.pause();
    this.videoFile = undefined;
    this.videoPlayer.nativeElement.load();
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
