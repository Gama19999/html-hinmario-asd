import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-fade',
  templateUrl: './fade.component.html',
  styleUrl: './fade.component.css'
})
export class FadeComponent implements AfterViewInit {
  appName: string = environment.appName;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.router.navigate(['/', 'start']), 2800);
  }
}
