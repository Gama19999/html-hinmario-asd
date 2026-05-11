import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { StateService } from './state.service';
import { Hymn, hymnIndex } from '../util/app.data';
import { path } from '../../app.routes';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private readonly router = inject(Router);
  private readonly stateSrv = inject(StateService);
  private playlist: Hymn[] = [];
  playlist$ = new BehaviorSubject<Hymn[]>(this.playlist);

  constructor() {}

  startPlayback(hymn: Hymn | undefined) {
    let route;
    if (hymn) { 
      this.removeFromPlaylist(hymn);
      route = [path.player, hymn.numeral];
      this.stateSrv.settingsShown$.next(false);
      this.stateSrv.playlistShown$.next(false);
    } else {
      const nextInPlaylist = this.nextInPlaylist()?.numeral;
      route = nextInPlaylist ? [path.player, nextInPlaylist] : [path.search];
      if (nextInPlaylist) { this.stateSrv.settingsShown$.next(false); }
      else { this.stateSrv.playlistShown$.next(true); }
    }
    this.router.navigate(route);
  }

  openLyrics(hymn: Hymn) {
    this.stateSrv.settingsShown$.next(false);
    this.router.navigate([path.reader, hymn.numeral]);
  }

  someInPlaylist(): boolean {
    return this.playlist.length > 0;
  }

  addToPlaylist(hymn: Hymn) {
    const canBeAdded = !this.playlist.find(h => h.numeral === hymn.numeral);
    if (canBeAdded) {
      this.playlist.push(hymn);
      this.playlist$.next(this.playlist);
    }
  }

  nextInPlaylist(): Hymn | undefined {
    const next = this.playlist.shift();
    this.playlist$.next(this.playlist);
    return next;
  }

  removeFromPlaylist(hymn: Hymn) {
    const index = this.playlist.findIndex(h => h.numeral === hymn.numeral);
    if (index !== -1) { 
      this.playlist.splice(index, 1);
      this.playlist$.next(this.playlist);
    }
  }

  clearPlaylist() {
    this.playlist = [];
    this.playlist$.next(this.playlist);
  }

  search(value: string): Hymn[] {
    value = value.trim();
    const sanitizedNumber = this.sanitizeNumber(value);
    if (sanitizedNumber) {
      return this.findByNumber(sanitizedNumber);
    } else {
      return this.findByText(value);
    }
  }

  private sanitizeNumber(value: string): string | undefined {
    let sanitized;
    if (Number.isFinite(+value) && +value > 0) {
      sanitized = value.padStart(3, '0');
    }
    return sanitized;
  }

  private findByNumber(numeral: string): Hymn[] {
    const result: Hymn[] = [];
    if (Object.keys(hymnIndex).find(num => num === numeral)) {
      result.push({ numeral: numeral, title: hymnIndex[numeral] })
    }
    return result;
  }

  private findByText(title: string): Hymn[] {
    let result: Hymn[] = [];
    const keywords = title.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (keywords.startsWith('.')) {
      result = Object.entries(hymnIndex)
                      .map<Hymn>(([k, v]) => ({ numeral: k, title: v }))
                      .sort((a, b) => +a.numeral - +b.numeral);
    } else if (keywords.length) {
      result = Object.entries(hymnIndex)
                      .filter(([k, v]) => v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(keywords))
                      .map<Hymn>(([k, v]) => ({ numeral: k, title: v }))
                      .sort((a, b) => +a.numeral - +b.numeral);
    }
    return result;
  }
}
