import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { PlaylistService } from '../../shared/services/playlist.service';
import { Hymn, ResultType } from '../../shared/util/app.types';

@Component({
  selector: 'app-result',
  imports: [NgClass],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
  @Input('data') data!: Hymn;
  @Input('type') type!: ResultType;

  constructor(private playSrv: PlaylistService) {}

  remove(evt: Event) {
    evt.preventDefault();
    this.playSrv.removeFromPlaylist(this.data.number);
  }

  add(evt: Event) {
    evt.preventDefault();
    this.playSrv.addToPlaylist(this.data.number);
  }
}
