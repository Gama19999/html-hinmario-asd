import { Injectable } from '@angular/core';

import { Dictionary } from '../models/dictionary.model';

@Injectable({ providedIn: 'root' })
export class UtilityService extends Dictionary {

  constructor() { super(); }

  /**
   * Normalizes number with zeros before if it is from 1-9 (1 -> 01). Used for images.
   * @param num Number to normalize
   * @return Normalized number with length 2
   */
  to2Number(num: string): string {
    return num.length === 1 ? '0' + num : num;
  }

  /**
   * Normalizes number with zeros before if it is from 1-9 (1 -> 01). Used for paths and sounds.
   * @param num Number to normalize
   * @return Normalized number with length 3
   */
  to3Number(num: string): string {
    return num.length === 1 ? '00' + num : num.length === 2 ? '0' + num : num;
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
   * Gets the maximum number of images for the lyrics of the hymn number
   * @param num Number of the hymn
   * @return Max number of lyrics images
   */
  getLyricsLimit(num: string): number {
    num = num.length === 1 ? '00' + num : num.length === 2 ? '0' + num : num;
    return this.limit[num];
  }
}
