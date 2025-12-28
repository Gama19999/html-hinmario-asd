import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CacheService } from './cache.service';
import { FullScreenEvt, FullScreenSrc, Theme } from '../util/app.types';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private _theme: Theme;
  private _playThrough: boolean;
  private _fullscreen: FullScreenEvt;
  private _churchName: string;
  private _screenSaverFeature: boolean;
  private ssTimeoutId: any;
  theme$: BehaviorSubject<Theme>;
  playThrough$: BehaviorSubject<boolean>;
  fullscreen$: BehaviorSubject<FullScreenEvt>;
  displayCanSleep$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  churchName$: BehaviorSubject<string>;
  screenSaver$: Subject<boolean> = new Subject();
  screenSaverFeature$: BehaviorSubject<boolean>;

  constructor(private cacheSrv: CacheService) {
    this._theme = cacheSrv.getTheme();
    this._playThrough = cacheSrv.isPlayThroughOn();
    this._fullscreen = { src: 'app', state: false };
    this._churchName = cacheSrv.getChurchName();
    this._screenSaverFeature = cacheSrv.isScreenSaverOn();
    cacheSrv.setTheme(this._theme);
    cacheSrv.setPlayThroughAs(this._playThrough);
    this.turnOnScreenAlwaysOn();
    cacheSrv.setChurchName(this._churchName);
    cacheSrv.setScreenSaverAs(this._screenSaverFeature);
    this.theme$ = new BehaviorSubject(this._theme);
    this.playThrough$ = new BehaviorSubject(this._playThrough);
    this.fullscreen$ = new BehaviorSubject(this._fullscreen);
    this.churchName$ = new BehaviorSubject(this._churchName);
    this.screenSaverFeature$ = new BehaviorSubject(this._screenSaverFeature);
  }

  private turnOnScreenAlwaysOn() {
    if (environment.appInfo.platform === 'electron') {
      window.electron.preventDisplaySleep().then(val => {
        this.cacheSrv.setDisplaySleepBlocker(val);
        this.displayCanSleep$.next(false);
      });
    }
  }

  toggleDarkTheme() {
    this._theme = this._theme === 'light' ? 'dark' : 'light';
    this.cacheSrv.setTheme(this._theme);
    this.theme$.next(this._theme);
  }

  togglePlayThrough() {
    this._playThrough = !this._playThrough;
    this.cacheSrv.setPlayThroughAs(this._playThrough);
    this.playThrough$.next(this._playThrough);
  }

  toggleFullScreen(src: FullScreenSrc) {
    switch (environment.appInfo.platform) {
      case 'web':
        if (src === 'app') document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
        this._fullscreen.state = !this._fullscreen.state;
        this._fullscreen.src = src === 'f11' && this._fullscreen.state ? src : 'app';
        this.fullscreen$.next(this._fullscreen);
        break;
      case 'electron':
        this._fullscreen.state = !this._fullscreen.state;
        this.fullscreen$.next(this._fullscreen);
        window.electron.setFullScreenAs(this._fullscreen.state);
        break;
    }
  }

  toggleDisplayCanSleep() {
    if (environment.appInfo.platform === 'electron') {
      if (!this._screenSaverFeature) return;
      const blockerId = this.cacheSrv.isDisplaySleepBlocked();
      if (blockerId)
        this.turnOffScreenAlwaysOn(blockerId);
      else
        this.turnOnScreenAlwaysOn();
    }
  }

  private turnOffScreenAlwaysOn(blockerId: string) {
    window.electron.allowDisplaySleep(+blockerId)
      .then(val => {
        this.displayCanSleep$.next(val);
        this.cacheSrv.removeDisplaySleepBlocker();
      })
      .catch(() => this.displayCanSleep$.next(false));
  }

  updateChurchName(val: string) {
    this._churchName = val;
    this.cacheSrv.setChurchName(this._churchName);
    this.churchName$.next(this._churchName);
  }

  toggleScreenSaverFeature() {
    this._screenSaverFeature = !this._screenSaverFeature;
    this.cacheSrv.setScreenSaverAs(this._screenSaverFeature);
    this.screenSaverFeature$.next(this._screenSaverFeature);
    if (!this._screenSaverFeature && environment.appInfo.platform === 'electron') {
      const blockerId = this.cacheSrv.isDisplaySleepBlocked();
      if (blockerId) this.turnOffScreenAlwaysOn(blockerId);
    }
  }

  scheduleScreenSaver() {
    if (this._screenSaverFeature) {
      this.ssTimeoutId = setTimeout(() => this.screenSaver$.next(true), environment.appInfo.screenSaverTO);
    }
  }

  clearScreenSaver() {
    if (!this.ssTimeoutId) return;
    clearTimeout(this.ssTimeoutId);
    this.ssTimeoutId = undefined;
    this.screenSaver$.next(false);
  }
}
