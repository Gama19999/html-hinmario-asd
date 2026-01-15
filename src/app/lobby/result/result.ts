import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private playSrv: PlaylistService, private router: Router) {}

  startPlayWith(evt: Event) {
    evt.preventDefault();
    this.playSrv.startWith(this.data.number);
    this.router.navigate(['/player']);
  }

  add(evt: Event) {
    evt.preventDefault();
    this.playSrv.addToPlaylist(this.data.number);
  }

  remove(evt: Event) {
    evt.preventDefault();
    this.playSrv.removeFromPlaylist(this.data.number);
  }
}
