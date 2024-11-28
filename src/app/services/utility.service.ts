import { ElementRef, Injectable } from '@angular/core';

import { Dictionary } from '../models/dictionary.model';
import { Author, HymnLyrics, Lyrics } from '../models/types.model';

@Injectable({ providedIn: 'root' })
export class UtilityService extends Dictionary {

  constructor() { super(); }
  /**
   * Normalizes number with zeros before if it is from 1-9 (1 -> 01). Used for paths and sounds.
   * @param num Number to normalize
   * @return Normalized number with length 3
   */
  to3Number(num: string): string {
    return num.length === 1 ? '00' + num : num.length === 2 ? '0' + num : num;
  }

  /**
   * Updates validity of number input field
   * @param number Number input field
   */
  checkNumberValidity(number: ElementRef) {
    if (number.nativeElement.value.length > 3) // More than 3 digits
      number.nativeElement.value = number.nativeElement.value.substring(0,3);
    if (+number.nativeElement.value < 0) number.nativeElement.value = '1'; // Value less than 1
    if (+number.nativeElement.value === 0) number.nativeElement.value = ''; // Value equal 0
    if (+number.nativeElement.value > 614) number.nativeElement.value = '614'; // Value greater than 614
    if (number.nativeElement.value.indexOf('e')) // Symbol of e
      number.nativeElement.value = number.nativeElement.value.replace('e','');
  }

  /**
   * Goes through index object and finds the name of the hymn corresponding to the number
   * @param num String which represents the number of the hymn to search the name for
   * @return Name of the hymn
   */
  searchByNumber(num: string): string {
    num = num.length === 1 ? '00' + num : num.length === 2 ? '0' + num : num;
    let name = '';
    for (let i in this.index)
      if (i === num) name = this.index[i];
    return name;
  }

  /**
   * Goes through index object and finds the [number - name] pair for the text analyzed
   * @param txt String to search for in the index
   * @return Array of matching options given the text
   */
  searchByText(txt: string): string[] {
    txt = txt.toUpperCase();
    const options: string[] = [];
    if (!txt) return options;
    for (let i in this.index)
      if (this.index[i].includes(txt)) options.push(i + ' - ' + this.index[i]);
    options.sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    });
    return options;
  }

  /**
   * Builds up the hymn cover
   * @param num Hymn number
   * @param elem Player element
   */
  setHymnCover(num: string, elem: ElementRef) {
    elem.nativeElement.children[0].append(document.createElement('span'));
    elem.nativeElement.children[0].append(document.createElement('span'));
    elem.nativeElement.children[0].children[0].innerHTML = this.to3Number(num);
    elem.nativeElement.children[0].children[1].innerHTML = this.getHymnLyrics(num)[this.to3Number(num)]['name'];
    elem.nativeElement.children[2].append(document.createElement('span'));
    elem.nativeElement.children[2].append(document.createElement('span'));
    elem.nativeElement.children[2].append(document.createElement('span'));
    elem.nativeElement.children[2].children[0].innerHTML = this.getHymnLyrics(num)[this.to3Number(num)]['verses'];
    const authors: Author = this.getHymnLyrics(num)[this.to3Number(num)]['authors'];
    elem.nativeElement.children[2].children[1].innerHTML = `<i class="pi pi-pencil"></i> ${authors.writers.toString().replaceAll(',',' | ')}`;
    elem.nativeElement.children[2].children[2].innerHTML = `<i class="pi pi-headphones"></i> ${authors.composers.toString().replaceAll(',',' | ')}`;
  }

  /**
   * Retrieves HymnLyrics object containing hymn data
   * @param num String which represents the number of the hymn to search the name for
   * @returns HymnLyrics object containing hymn data
   */
  private getHymnLyrics(num: string): HymnLyrics {
    num = this.to3Number(num);
    return {[num]: this.hymnLyrics[num]};
  }

  /**
   * Updates in real time the hymn lyrics
   * @param currentPos Current sound timestamp
   * @param num Hymn number
   * @param elem Player element
   */
  updateLyrics(currentPos: number, num: string, elem: ElementRef) {
    const lyrics: Lyrics = this.getHymnLyrics(num)[this.to3Number(num)]['lyrics'];
    if (lyrics[`${currentPos}`]) {
      this.hideHymnCover(elem);
      elem.nativeElement.children[1].innerHTML = lyrics[`${currentPos}`]['text'];
    }
  }

  /**
   * Hides the hymn cover
   * @param elem Player element
   */
  private hideHymnCover(elem: ElementRef) {
    if (!elem.nativeElement.children[0].classList.contains('hide')){
      elem.nativeElement.children[0].classList.add('hide');
      elem.nativeElement.children[2].classList.add('hide');
      elem.nativeElement.children[1].classList.remove('hide');
    }
  }

  /**
   * Displays the hidden hymn cover
   * @param elem Player element
   */
  restoreHymnCover(elem: ElementRef) {
    elem.nativeElement.children[1].classList.add('hide');
    elem.nativeElement.children[0].classList.remove('hide');
    elem.nativeElement.children[2].classList.remove('hide');
  }
}
