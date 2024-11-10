import { Injectable } from '@angular/core';
import { Howl } from 'howler';

import { environment } from '../../environments/environment';
import { browserRefresh } from '../app.component';
import { UtilityService } from './utility.service';

@Injectable({ providedIn: 'root' })
export class SoundService {
  private _pop: Howl;
  private _hymn: Howl | undefined;

  constructor(private utilityService: UtilityService) {
    this._pop = new Howl({ src: ['./media/pop.mp3'], html5: true });
  }

  get isPlaying(): boolean { return this._hymn ? this._hymn.playing() : false; }

  tap = () => this._pop.play();

  loadMusic(num: string) {
    this._hymn = this.createHowl(environment.musicPath + this.utilityService.to3Number(num) + '.webm');
    this.onceListeners();
  }

  loadChoir(num: string) {
    this._hymn = this.createHowl(environment.choirPath + this.utilityService.to3Number(num) + '.webm');
    this.onceListeners();
  }

  private createHowl(src: string): Howl {
    return new Howl({ src: [src], html5: true, volume: 1.0, preload: true, autoplay: false });
  }

  private onceListeners() {
    this._hymn!.once('load', () => {
      if (!browserRefresh) this._hymn!.play();
      document.getElementById('action')!.classList.add(this.isPlaying ? 'pi-pause' : 'pi-play');
    });
    this._hymn!.once('loaderror', (id, err) => console.log('Sound with ID: ', id, ' could not be loaded, error code: ', err));
  }

  doAction(element: any) {
    if (this.isPlaying) this._hymn!.pause();
    else this._hymn!.play();
    setTimeout(() => {
      element.classList.remove(this.isPlaying ? 'pi-play' : 'pi-pause');
      element.classList.add(this.isPlaying ? 'pi-pause' : 'pi-play');
    }, browserRefresh ? 100 : 0);
  }

  reset() {
    this._hymn!.fade(1.0, 0.0, 1500);
    setTimeout(() => this._hymn!.unload(), 1501);
  }
}
