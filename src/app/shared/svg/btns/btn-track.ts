import { Component, Input } from '@angular/core';

import { TrackMode } from '../../util/app.types';

@Component({
  selector: 'app-btn-track',
  imports: [],
  templateUrl: './btn-track.html',
})
export class BtnTrack {
  @Input('mode') mode: TrackMode = 'choir';
}
