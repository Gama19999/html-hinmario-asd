import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CacheService } from './cache.service';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly cacheSrv = inject(CacheService);
  playThroughOn$: BehaviorSubject<boolean>;
  displayCanSleep$: BehaviorSubject<boolean> | undefined;

  constructor() {
    const playThrough = this.cacheSrv.getPlayThrough();
    this.cacheSrv.setPlayThrough(playThrough);
    this.playThroughOn$ = new BehaviorSubject(playThrough);
    this.setupElectron();
  }

  private setupElectron() {
    if (environment.appInfo.platform === 'electron') {
      window.electronAPI.requestDisplaySleep().then(like => this.displayCanSleep$ = new BehaviorSubject(like === 'asleep'));
    }
  }

  togglePlayThrough() {
    const current = this.playThroughOn$.value;
    this.cacheSrv.setPlayThrough(!current);
    this.playThroughOn$.next(!current);
  }

  toggleDisplaySleep() {
    if (environment.appInfo.platform === 'electron') {
      const like = this.displayCanSleep$?.value ? 'awake' : 'asleep';
      window.electronAPI.requestDisplaySleep(like).then(like => this.displayCanSleep$?.next(like === 'asleep'));
    }
  }
}
