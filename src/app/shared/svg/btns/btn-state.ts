import { Component, Input } from '@angular/core';

import { MediaState } from '../../util/app.types';

@Component({
  selector: 'app-btn-state',
  imports: [],
  templateUrl: './btn-state.html',
})
export class BtnState {
  @Input('state') state!: MediaState;
  @Input('small') small: boolean = false;
}
