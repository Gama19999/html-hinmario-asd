import { Component, effect, ElementRef, inject, viewChild, ViewContainerRef } from '@angular/core';

import { es } from '../../assets/language/es.strings';
import { environment } from '../../environments/environment';
import { MediaService } from '../shared/services/media.service';
import { StateService } from '../shared/services/state.service';
import { Match } from './match/match';
import { Logo } from '../shared/svg/logo';

@Component({
  selector: 'app-search',
  imports: [Logo],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private readonly mediaSrv = inject(MediaService);
  private readonly stateSrv = inject(StateService);
  protected readonly searchStr = es.search;
  protected readonly settingsStr = es.settings;
  appInfo = environment.appInfo;
  searchField = viewChild<ElementRef<HTMLInputElement>>('searchField');
  matchesDiv = viewChild<ElementRef<HTMLDivElement>>('matchesDiv');
  ngContainer = viewChild('ngContainer', { read: ViewContainerRef });

  constructor() {
    effect(() => {
      this.searchField()?.nativeElement.focus();
    })
  }

  search() {
    const matches = this.mediaSrv.search(this.searchField()?.nativeElement.value ?? '');
    const vcr = this.ngContainer();
    if (vcr) {
      vcr.clear();
      let itemRef, itemEl;
      for (const hymn of matches) {
        itemRef = vcr.createComponent(Match);
        itemRef.setInput('hymn', hymn);
        itemEl = itemRef.location.nativeElement as HTMLElement;
        itemEl.tabIndex = -1;
        itemEl.dataset['numeral'] = hymn.numeral;
      }
    }
  }

  focusMatches() {
    const matchEl = this.matchesDiv()?.nativeElement.firstElementChild as HTMLElement;
    matchEl.focus();
  }

  onMatchesKey(evt: KeyboardEvent) {
    const items = Array.from(this.matchesDiv()!.nativeElement.children) as HTMLElement[];
    const activeEl = document.activeElement as HTMLElement;
    const hymn = { numeral: activeEl.dataset['numeral'] ?? '', title: '' };
    const currentIndex = items.indexOf(activeEl);
    let nextIndex = currentIndex;
    switch (evt.code) {
      case 'ArrowDown': nextIndex = (currentIndex + 1) % items.length; break;
      case 'ArrowUp': nextIndex = (currentIndex - 1 + items.length) % items.length; break;
      case 'Escape': this.searchField()?.nativeElement.focus(); return;
      case 'Enter': this.mediaSrv.startPlayback(hymn); return;
      case 'KeyL': this.mediaSrv.openLyrics(hymn); return;
      case 'KeyP': this.mediaSrv.addToPlaylist(hymn); break;
      case 'KeyR': this.mediaSrv.removeFromPlaylist(hymn); break;
    }
    items[nextIndex].focus();
  }

  showSettings() {
    const current = this.stateSrv.settingsShown$.value;
    this.stateSrv.settingsShown$.next(!current);
  }
}
