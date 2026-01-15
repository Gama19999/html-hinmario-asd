import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CacheService } from './cache.service';
import { Theme } from '../util/app.types';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private _theme: Theme;
  private _playThrough: boolean;
  theme$: BehaviorSubject<Theme>;
  playThrough$: BehaviorSubject<boolean>;
  videoSourcesPath$: BehaviorSubject<string> = new BehaviorSubject(environment.appInfo.videoSource);

  constructor(private cacheSrv: CacheService) {
    this._theme = cacheSrv.getTheme();
    this._playThrough = cacheSrv.isPlayThroughOn();
    cacheSrv.setTheme(this._theme);
    cacheSrv.setPlayThroughAs(this._playThrough);
    this.theme$ = new BehaviorSubject(this._theme);
    this.playThrough$ = new BehaviorSubject(this._playThrough);
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

  async getVideoSourcesPath() {
    if (environment.appInfo.platform === 'electron') {
      const videoSourcePath = await window.electron.getVideoSourcesPath();
      this.videoSourcesPath$.next(videoSourcePath);
    }
  }
}
