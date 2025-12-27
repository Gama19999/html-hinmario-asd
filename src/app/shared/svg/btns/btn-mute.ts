import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-mute',
  imports: [],
  templateUrl: './btn-mute.html',
})
export class BtnMute {
  @Input('mute') mute: boolean = true;
}
