import { ElementRef, Injectable } from '@angular/core';

import { Hymn } from '../util/app.types';
import { index } from '../util/app.index';

@Injectable({ providedIn: 'root' })
export class LookupService {

  constructor() {}

  search(val: string): Hymn[] {
    if (!val) return []; // Empty input
    const num = this.sanitizeNumber(val);
    if (num) return this.searchByNumber(num);
    else return this.searchByText(val);
  }

  /**
   * Sanitizes value of search input field if it starts with a number
   * @param val Search input field value
   * @return Sanitized number string or undefined if not a number value
   */
  private sanitizeNumber(val: string): string | undefined {
    if (!Number.isFinite(+val)) return undefined; // NOT a number
    switch (true) {
      case +val < 0: return undefined; // Negative number
      case +val === 0: return '0';
      case +val > 614: return this.to3Number('614');
      default: return this.to3Number(val);
    }
  }

  /**
   * Pads a number with zeros to ensure it has length 3
   * @param num Number to normalize
   * @return Normalized number with a length of 3
   */
  private to3Number(num: string): string {
    return num.length === 1 ? '00' + num : num.length === 2 ? '0' + num : num;
  }

  /**
   * Goes through an index to find matching hymns given a number
   * @param num Number to search for
   * @return All hymn matches found
   */
  private searchByNumber(num: string): Hymn[] {
    const found: Hymn[] = [];
    for (const k in index) {
      if (k === num) {
        found.push({ number: k, title: index[k] });
        break;
      }
    }
    return found;
  }

  /**
   * Goes through an index to find matching hymns given a value
   * @param str String to search for
   * @return All hymn matches found
   */
  private searchByText(str: string): Hymn[] {
    const found: Hymn[] = [];
    str = str.toUpperCase();
    for (const [k, v] of Object.entries(index))
      if (v.includes(str)) found.push({ number: k, title: v });
    found.sort((a, b) => +a.number < +b.number ? -1 : +a.number > +b.number ? 1 : 0);
    return found;
  }
}
