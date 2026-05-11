import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Logo } from '../shared/svg/logo';

@Component({
  selector: 'app-fade',
  imports: [Logo],
  templateUrl: './fade.html',
  styleUrl: './fade.css',
})
export class Fade implements OnInit {
  private readonly router = inject(Router);
  appInfo = environment.appInfo;

  ngOnInit(): void {
    setTimeout(() => this.router.navigate(['/search'], { replaceUrl: true }), 2000);
  }
}
