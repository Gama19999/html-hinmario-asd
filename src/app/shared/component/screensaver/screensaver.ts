import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../services/config.service';
import { Logo } from '../../svg/logo/logo';

@Component({
  selector: 'app-screensaver',
  imports: [Logo],
  templateUrl: './screensaver.html',
  styleUrl: './screensaver.css',
})
export class Screensaver implements OnInit {
  churchName!: string;

  constructor(private configSrv: ConfigService) {}

  ngOnInit(): void {
    this.churchName = this.configSrv.churchName$.value;
  }
}
