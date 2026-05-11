import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { es } from '../assets/language/es.strings';
import { environment } from '../environments/environment';
import { ConfigService } from './shared/services/config.service';
import { MediaService } from './shared/services/media.service';
import { StateService } from './shared/services/state.service';
import { Playlist } from './playlist/playlist';
import { Settings } from './settings/settings';

@Component({
  selector: 'app-root',
  imports: [Playlist, Settings, RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly metaSrv = inject(Meta);
  private readonly configSrv = inject(ConfigService);
  private readonly mediaSrv = inject(MediaService);
  private readonly stateSrv = inject(StateService);
  protected readonly str = es.settings;
  settingsShown$!: BehaviorSubject<boolean>;

  constructor() {}

  ngOnInit(): void {
    switch (environment.appInfo.platform) {
      case 'dev': break;
      case 'electron': this.setupElectron(); break;
      case 'android': this.setupAndroid(); break;
    }
    this.settingsShown$ = this.stateSrv.settingsShown$;
  }

  private setupElectron() {
    this.metaSrv.addTag({
      httpEquiv: 'Content-Security-Policy',
      content: "default-src 'self'; connect-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self';"
    });
  }

  private setupAndroid() {
    this.metaSrv.addTag({
      httpEquiv: 'Content-Security-Policy',
      content: "default-src 'self'; connect-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self';"
    });
    this.metaSrv.updateTag({
      name: 'viewport',
      content: 'user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=1, width=device-width, height=device-height'
    });
    // Add android JSCustomEvent handlers
  }

  someInPlaylist(): boolean {
    return this.mediaSrv.someInPlaylist();
  }
}
