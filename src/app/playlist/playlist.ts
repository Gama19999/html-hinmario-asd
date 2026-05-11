import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

import { es } from '../../assets/language/es.strings';
import { MediaService } from '../shared/services/media.service';
import { StateService } from '../shared/services/state.service';
import { Match } from '../search/match/match';
import { Hymn } from '../shared/util/app.data';

@Component({
  selector: 'app-playlist',
  imports: [Match, AsyncPipe],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css',
})
export class Playlist implements OnInit {
  private readonly mediaSrv = inject(MediaService);
  private readonly stateSrv = inject(StateService);
  protected readonly str = es.playlist;
  playlist$!: BehaviorSubject<Hymn[]>;
  playlistShown$!: BehaviorSubject<boolean>;

  ngOnInit(): void {
    this.playlist$ = this.mediaSrv.playlist$;
    this.playlistShown$ = this.stateSrv.playlistShown$;
  }

  togglePlaylistDisplay() {
    const inSearch = location.pathname.split('/').includes('search');
    if (!inSearch) { this.stateSrv.togglePlaylistDisplay(); }
  }

  clearPlaylist() {
    this.mediaSrv.clearPlaylist();
  }
}
