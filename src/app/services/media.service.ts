import { ElementRef, Injectable } from '@angular/core';
import { Howl } from 'howler';

import { environment } from '../../environments/environment';
import { browserRefresh } from '../app.component';
import { UtilityService } from './utility.service';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private _click: Howl;
  private _hymn: Howl | undefined;
  private _num: string = '';
  private _playerLyrics: ElementRef = new ElementRef({});
  private _currentPos: number = 0;
  private _timerId: any;
  private _background: number = 1;
  private _roundBg: boolean = false;

  constructor(private utilityService: UtilityService) {
    this._click = new Howl({ src: ['./media/pop.mp3'], html5: true });
  }

  get isPlaying(): boolean { return this._hymn ? this._hymn.playing() : false; }
  get isRoundBg(): boolean { return this._roundBg; }

  click = () => this._click.play();

  loadLyrics(num: string, elem: ElementRef) {
    this._num = num;
    this._playerLyrics = elem;
    this.utilityService.setHymnCover(this._num, this._playerLyrics);
  }

  loadMusic(num: string, elem: ElementRef) {
    this.loadLyrics(num, elem);
    this._hymn = this.createHowl(environment.musicPath + this.utilityService.to3Number(num) + '.webm');
    this.setListeners();
  }

  loadChoir(num: string, elem: ElementRef) {
    this.loadLyrics(num, elem);
    this._hymn = this.createHowl(environment.choirPath + this.utilityService.to3Number(num) + '.webm');
    this.setListeners();
  }

  private createHowl(src: string): Howl {
    return new Howl({ src: [src], html5: true, volume: 1.0, preload: true, autoplay: false });
  }

  private setListeners() {
    this._hymn!.once('load', () => {
      if (!browserRefresh) this._hymn!.play();
      document.getElementById('action')!.classList.add(this.isPlaying ? 'pi-pause' : 'pi-play');
    });
    this._hymn!.once('loaderror', (id, err) => console.log('Sound with ID: ', id, ' could not be loaded, error code: ', err));
    this._hymn!.on('play', () => this.startTimer());
    this._hymn!.on('pause', () => this.stopTimer());
    this._hymn!.on('end', () => this.stopTimer(true));
    this._hymn!.on('fade', () => this.stopTimer(true));
  }

  private startTimer() {
    console.log('Resumed timer!');
    this._timerId = setInterval(() => {
      this._currentPos += 1;
      this.utilityService.updateLyrics(this._currentPos, this._num, this._playerLyrics);
    }, 1000);
  }

  private stopTimer(end: boolean = false) {
    clearInterval(this._timerId);
    this._timerId = undefined;
    console.log('Paused timer!');
    if (end) {
      this._currentPos = 0;
      console.log('Stopped timer!');
      document.getElementById('action')!.classList.remove('pi-pause');
      document.getElementById('action')!.classList.add('pi-play');
      this.utilityService.restoreHymnCover(this._playerLyrics);
    }
  }

  doAction(element: any) {
    if (this.isPlaying) this._hymn!.pause();
    else this._hymn!.play();
    setTimeout(() => {
      element.classList.remove(this.isPlaying ? 'pi-play' : 'pi-pause');
      element.classList.add(this.isPlaying ? 'pi-pause' : 'pi-play');
    }, browserRefresh ? 100 : 0);
  }

  getBackground(): number {
    if (this._roundBg) this._background = +this._background + 1 > environment.maxBg ? 1 : +this._background + 1;
    return this._background;
  }

  toggleRoundBg() { this._roundBg = !this._roundBg; }

  reset() {
    if (this.isPlaying) {
      this._hymn!.fade(1.0, 0.0, 1500);
      setTimeout(() => this._hymn!.unload(), 1501);
    } else this._hymn!.unload();
    this._num = '';
    this._playerLyrics = new ElementRef({});
    this._currentPos = 0;
  }
}
