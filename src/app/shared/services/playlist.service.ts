import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  private _playlist: string[] = [];
  playlist: BehaviorSubject<string[]> = new BehaviorSubject(this._playlist);

  constructor() { }

  addToPlaylist(num: string) {
    if (!num) return;
    if (this._playlist.includes(num)) return;
    this._playlist.push(num);
    this.playlist.next(this._playlist);
  }

  startWith(num: string) {
    this._playlist.unshift(this._playlist.includes(num) ? this._playlist.splice(this._playlist.indexOf(num), 1)[0] : num);
    this.playlist.next(this._playlist);
  }

  nextInPlaylist(): string | undefined {
    const next = this._playlist.shift();
    this.playlist.next(this._playlist);
    return next;
  }

  removeFromPlaylist(num: string) {
    const index = this._playlist.indexOf(num);
    if (index === -1) return;
    this._playlist.splice(index, 1);
    this.playlist.next(this._playlist);
  }

  clearPlaylist() {
    this._playlist = [];
    this.playlist.next(this._playlist);
  }

}
