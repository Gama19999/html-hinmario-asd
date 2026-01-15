import { Injectable } from '@angular/core';

import { Theme } from '../util/app.types';

@Injectable({ providedIn: 'root' })
export class CacheService {
  private readonly THEME = 'THEME'; // ligth (def)
  private readonly PLAY_THROUGH = 'PLAY_THROUGH'; // enabled (def)
  
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
}
