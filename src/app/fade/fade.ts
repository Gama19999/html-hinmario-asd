import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { ConfigService } from '../shared/services/config.service';
import { Logo } from '../shared/svg/logo/logo';
import { Theme } from '../shared/util/app.types';

@Component({
  selector: 'app-fade',
  imports: [Logo],
  templateUrl: './fade.html',
  styleUrl: './fade.css',
})
export class Fade implements OnInit {
  appInfo = environment.appInfo;
  theme!: Theme;

  constructor(private configSrv: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.theme = this.configSrv.theme$.value;
    setTimeout(() => this.router.navigate(['/lobby'], { replaceUrl: true }), 3000);
  }
}
