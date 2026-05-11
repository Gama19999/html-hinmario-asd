import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {
  settingsShown$ = new BehaviorSubject<boolean>(false);
  playlistShown$ = new BehaviorSubject<boolean>(true);

  constructor() {}

  togglePlaylistDisplay() {
    const current = this.playlistShown$.value;
    this.playlistShown$.next(!current);
  }
}
