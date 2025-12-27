import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ConfigService } from './shared/services/config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {

  constructor(private configSrv: ConfigService) {}

  @HostListener('window:keyup', ['$event'])
  onF11FullScreen(evt: KeyboardEvent) {
    if (evt.code === 'F11') this.configSrv.toggleFullScreen('f11');
  }

  @HostListener('window:resize')
  onExitF11FullScreen() {
    if (this.configSrv.fullscreen$.value.src === 'f11' && this.configSrv.fullscreen$.value.state) this.configSrv.toggleFullScreen('f11');
  }
}
