import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CacheService {
  private readonly PLAY_THROUGH = 'PLAY_THROUGH';

  constructor() {}

  setPlayThrough(val: boolean) {
    localStorage.setItem(this.PLAY_THROUGH, val ? '1' : '0');
  }

  getPlayThrough(): boolean {
    return !!+(localStorage.getItem(this.PLAY_THROUGH) ?? '1');
  }
}
