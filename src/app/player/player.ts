import { ChangeDetectorRef, Component, effect, ElementRef, inject, input, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { fromEvent, Subscription } from 'rxjs';

import { es } from '../../assets/language/es.strings';
import { ConfigService } from '../shared/services/config.service';
import { MediaService } from '../shared/services/media.service';
import { StateService } from '../shared/services/state.service';
import { path } from '../app.routes';
import { fadeOut, loadVideoSource, toggleAudioTrack } from '../shared/util/media.functions';

export type AudioMode = 'choir' | 'track';
type SeekDirection = 'replay' | 'forward' | undefined;

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.html',
  styleUrl: './player.css',
})
export class Player implements OnInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly router = inject(Router);
  private readonly titleSrv = inject(Title);
  private readonly configSrv = inject(ConfigService);
  private readonly mediaSrv = inject(MediaService);
  private readonly stateSrv = inject(StateService);
  private subs: Subscription[] = [];
  protected readonly str = es.player;
  numeral = input.required<string>(); // route param /player/:numeral
  playing = false;
  muted = false;
  audioMode: AudioMode = 'choir';
  playThrough!: boolean;
  seekDir: SeekDirection;
  videoPlayer = viewChild<ElementRef<HTMLVideoElement>>('videoPlayer');

  constructor() {
    effect(() => {
      this.titleSrv.setTitle(`HASD | ${this.numeral()}`);
      if (this.videoPlayer()) {
        const videoEl = this.videoPlayer()!.nativeElement;
        loadVideoSource(videoEl, this.numeral());
      }
    });
  }

  ngOnInit(): void {
    this.subs.push(this.configSrv.playThroughOn$.subscribe(val => this.playThrough = val));
    this.subs.push(fromEvent<KeyboardEvent>(window, 'keyup').subscribe(this.keyListener));
  }

  private keyListener = (evt: KeyboardEvent) => {
    switch (evt.code) {
      case 'Escape':
      case 'Backspace': this.exitPlayer(); break;
      case 'Space': this.toggleState(); break;
      case 'KeyM': this.toggleMute(); break;
      case 'KeyC': this.toggleMode(); break;
      case 'ArrowLeft': this.seekPrev10(); break;
      case 'ArrowRight': this.seekNext10(); break;
      case 'KeyP': this.stateSrv.togglePlaylistDisplay(); break;
    }
  }

  exitPlayer() {
    fadeOut(this.videoPlayer()!.nativeElement);
    setTimeout(() => {
      this.stateSrv.playlistShown$.next(true);
      this.router.navigate([path.search]);
    }, 1000);
  }

  toggleState() {
    const videoEl = this.videoPlayer()!.nativeElement;
    if (this.playing) { videoEl.pause(); }
    else { videoEl.play(); }
  }

  toggleMute() {
    this.muted = !this.muted;
    this.cdr.detectChanges();
    const videoEl = this.videoPlayer()!.nativeElement;
    videoEl.muted = this.muted;
  }

  toggleMode() {
    this.audioMode = this.audioMode === 'choir' ? 'track' : 'choir';
    this.cdr.detectChanges();
    const videoEl = this.videoPlayer()!.nativeElement;
    toggleAudioTrack(videoEl);
  }

  private seekPrev10() {
    this.seekDir = 'replay';
    this.cdr.detectChanges();
    const videoEl = this.videoPlayer()!.nativeElement;
    videoEl.currentTime -= 10;
  }
  
  private seekNext10() {
    const videoEl = this.videoPlayer()!.nativeElement;
    const duration = videoEl.duration;
    const current = videoEl.currentTime;
    if (current + 10 < duration - 10) {
      this.seekDir = 'forward';
      this.cdr.detectChanges();
      videoEl.currentTime += 10;
    }
  }

  togglePlayThrough() {
    this.configSrv.togglePlayThrough();
  }

  onVideoEnd() {
    if (this.playThrough) { this.playNextHymn(); }
    else if (!this.mediaSrv.someInPlaylist()) { this.exitPlayer(); }
  }

  private playNextHymn() {
    const nextHymn = this.mediaSrv.nextInPlaylist();
    if (nextHymn) { this.mediaSrv.startPlayback(nextHymn); }
    else { this.exitPlayer(); }
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
