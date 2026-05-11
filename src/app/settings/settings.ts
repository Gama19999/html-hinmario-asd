import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { es } from '../../assets/language/es.strings';
import { environment } from '../../environments/environment';
import { ConfigService } from '../shared/services/config.service';
import { StateService } from '../shared/services/state.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-settings',
  imports: [AsyncPipe],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings implements OnInit {
  private readonly configSrv = inject(ConfigService);
  private readonly stateSrv = inject(StateService);
  protected readonly str = es.settings;
  playThroughOn$!: BehaviorSubject<boolean>;
  displayCanSleep$: BehaviorSubject<boolean> | undefined;
  appInfo = environment.appInfo;
  appContact = environment.appContact;

  constructor() {}

  ngOnInit(): void {
    this.playThroughOn$ = this.configSrv.playThroughOn$;
    this.displayCanSleep$ = this.configSrv.displayCanSleep$;
  }

  closeSettings() {
    this.stateSrv.settingsShown$.next(false);
  }

  togglePlayThrough() {
    this.configSrv.togglePlayThrough();
  }

  toggleDisplaySleep() {
    this.configSrv.toggleDisplaySleep();
  }
}
