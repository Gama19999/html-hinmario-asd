import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({ providedIn: 'root' })
export class SoundService {
  private _pop: Howl;

  constructor() {
    this._pop = new Howl({ src: ['./media/pop.mp3'], html5: true });
  }

  tap = () => this._pop.play();
}
