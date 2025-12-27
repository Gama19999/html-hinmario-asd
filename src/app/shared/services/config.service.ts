import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CacheService } from './cache.service';
import { FullScreenEvt, FullScreenSrc, Theme } from '../util/app.types';

@Injectable({ providedIn: 'root'})
export class ConfigService {
  private _theme: Theme;
  private _playThrough: boolean;
  private _fullscreen: FullScreenEvt;
  theme$: BehaviorSubject<Theme>;
  playThrough$: BehaviorSubject<boolean>;
  fullscreen$: BehaviorSubject<FullScreenEvt>;

  constructor(private cacheSrv: CacheService) {
    this._theme = cacheSrv.getTheme();
    this._playThrough = cacheSrv.isPlayThroughOn();
    this._fullscreen = { src: 'app', state: false };
    cacheSrv.setTheme(this._theme);
    cacheSrv.setPlayThroughAs(this._playThrough);
    this.theme$ = new BehaviorSubject(this._theme);
    this.playThrough$ = new BehaviorSubject(this._playThrough);
    this.fullscreen$ = new BehaviorSubject(this._fullscreen);
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
        console.log(this._fullscreen);
        this.fullscreen$.next(this._fullscreen);
        break;
      case 'electron': return; // TODO complete this function <--
    }
  }
}
