import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { UtilityService } from './utility.service';

@Injectable({ providedIn: 'root' })
export class LyricsService {
  private element: any;
  private num: string = '';
  private path: string = '';
  private current: string = '';
  private readonly extras: string = ' 50% 50% / auto 100% no-repeat';

  constructor(private utilityService: UtilityService) {}

  loadLyrics(num: string, element: any) {
    this.num = this.utilityService.to3Number(num);
    this.path = environment.lyricsPath + this.num;
    this.element = element;
    this.next();
  }

  next() {
    if (+this.current + 1 > this.utilityService.getLyricsLimit(this.num)) this.current = '01';
    else this.current = this.utilityService.to2Number('' + (+this.current + 1));
    this.element.style.background = `url(${this.path}/${this.current}.webp)` + this.extras;
  }

  prev() {
    if (+this.current - 1 === 0)
      this.current = this.utilityService.to2Number('' + this.utilityService.getLyricsLimit(this.num));
    else this.current = this.utilityService.to2Number('' + (+this.current - 1));
    this.element.style.background = `url(${this.path}/${this.current}.webp)` + this.extras;
  }

  reset() {
    this.element = undefined;
    this.num = '';
    this.path = '';
    this.current = '';
  }
}
