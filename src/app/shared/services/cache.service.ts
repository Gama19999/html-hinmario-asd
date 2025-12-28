import { Injectable } from '@angular/core';

import { Theme } from '../util/app.types';

@Injectable({ providedIn: 'root' })
export class CacheService {
  private readonly THEME = 'THEME'; // ligth (def)
  private readonly PLAY_THROUGH = 'PLAY_THROUGH'; // enabled (def)
  private readonly BLOCKER = 'BLOCKER'; // null (def) --> display always on enabled
  private readonly CHURCH = 'CHURCH'; // completa el nombre (def)
  private readonly SCREEN_SAVER = 'SCREEN_SAVER'; // enabled (def)
  
  constructor() {}

  setTheme(theme: Theme) {
    localStorage.setItem(this.THEME, theme);
  }

  getTheme(): Theme {
    return (localStorage.getItem(this.THEME) ?? 'light') as Theme;
  }

  setPlayThroughAs(val: boolean) {
    localStorage.setItem(this.PLAY_THROUGH, val ? 'enabled' : 'disabled');
  }

  isPlayThroughOn(): boolean {
    return (localStorage.getItem(this.PLAY_THROUGH) ?? 'enabled') === 'enabled';
  }

  setDisplaySleepBlocker(blockerId: number) {
    localStorage.setItem(this.BLOCKER, blockerId.toString());
  }

  isDisplaySleepBlocked(): string | null {
    return localStorage.getItem(this.BLOCKER);
  }

  removeDisplaySleepBlocker() {
    localStorage.removeItem(this.BLOCKER);
  }

  setChurchName(val: string) {
    val = val.trim();
    localStorage.setItem(this.CHURCH, val ? val : 'completa el nombre');
  }

  getChurchName(): string {
    return localStorage.getItem(this.CHURCH) ?? 'completa el nombre';
  }

  setScreenSaverAs(val: boolean) {
    localStorage.setItem(this.SCREEN_SAVER, val ? 'enabled' : 'disabled');
  }

  isScreenSaverOn(): boolean {
    return (localStorage.getItem(this.SCREEN_SAVER) ?? 'enabled') === 'enabled';
  }
}
