import { Component, inject, input } from '@angular/core';

import { es } from '../../../assets/language/es.strings';
import { MediaService } from '../../shared/services/media.service';
import { Hymn } from '../../shared/util/app.data';

@Component({
  selector: 'app-match',
  imports: [],
  templateUrl: './match.html',
  styleUrl: './match.css',
})
export class Match {
  private readonly mediaSrv = inject(MediaService);
  protected readonly str = es.match;
  hymn = input.required<Hymn>();
  inPlaylist = input<boolean>(false);

  constructor() {}

  removeFromPlaylist() {
    this.mediaSrv.removeFromPlaylist(this.hymn());
  }

  startPlayback() {
    this.mediaSrv.startPlayback(this.hymn());
  }

  openLyrics() {
    this.mediaSrv.openLyrics(this.hymn());
  }

  addToPlaylist() {
    this.mediaSrv.addToPlaylist(this.hymn());
  }
}
