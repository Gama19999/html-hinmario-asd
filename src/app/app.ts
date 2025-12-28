import { Component, HostListener, OnInit, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { ConfigService } from './shared/services/config.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App implements OnInit {

  constructor(private configSrv: ConfigService, private metaSrv: Meta) {}

  ngOnInit(): void {
    if (environment.appInfo.platform === 'electron') {
      this.metaSrv.addTag({
        httpEquiv: 'Content-Security-Policy',
        content: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self';"
      });
    }
  }

  @HostListener('window:keyup', ['$event'])
  onF11FullScreen(evt: KeyboardEvent) {
    if (evt.code === 'F11') this.configSrv.toggleFullScreen('f11');
  }

  @HostListener('window:resize')
  onExitF11FullScreen() {
    if (this.configSrv.fullscreen$.value.src === 'f11' && this.configSrv.fullscreen$.value.state) this.configSrv.toggleFullScreen('f11');
  }
}
