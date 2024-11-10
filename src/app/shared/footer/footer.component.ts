import { Component, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input('just-version') justVersion: boolean = false;
  version: string = environment.version;
}
