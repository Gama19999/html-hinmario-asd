import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MediaService } from '../../services/media.service';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') private menu!: ElementRef;
  @ViewChild('links') private links!: ElementRef;
  isRoundBg: boolean = false;
  isApp: boolean = environment.platform == 'app';

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.isRoundBg = this.mediaService.isRoundBg;
  }

  toggleMenu() {
    this.mediaService.click();
    this.checkForClears();
    if (this.menu.nativeElement.getAttribute('opened')) {
      this.menu.nativeElement.removeAttribute('opened');
      this.links.nativeElement.classList.add('hidden');
    } else {
      this.menu.nativeElement.setAttribute('opened', 'true');
      this.links.nativeElement.classList.remove('hidden');
    }
    this.menu.nativeElement.classList.remove(this.menu.nativeElement.getAttribute('opened') ? 'pi-bars' : 'pi-asterisk');
    this.menu.nativeElement.classList.add(this.menu.nativeElement.getAttribute('opened') ? 'pi-asterisk' : 'pi-bars');
  }

  private checkForClears() {
    if (innerWidth < 1025) {
      (<HTMLInputElement> document.getElementsByClassName('start-text').item(0)).value = '';
      (<HTMLInputElement> document.getElementsByClassName('start-number').item(0)).value = '';
    }
  }

  linkClicked(target: any) {
    this.mediaService.click();
    switch ((<HTMLSpanElement> target).id) {
      case 'rbg': this.roundBg(); break;
      case 'idx': break;
      case 'cred': break;
      case 'andr': break;
      case 'wind': break;
      case 'exit': break;
    }
  }

  private roundBg() {
    this.mediaService.toggleRoundBg();
    this.isRoundBg = this.mediaService.isRoundBg;
  }
}
