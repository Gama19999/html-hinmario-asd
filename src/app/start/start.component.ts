import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MediaService } from '../services/media.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('start') private start!: ElementRef;
  @ViewChild('lyrics') private lyrics!: ElementRef;
  @ViewChild('music') private music!: ElementRef;
  @ViewChild('choir') private choir!: ElementRef;
  @ViewChild('number') private number!: ElementRef;
  @ViewChild('text') private text!: ElementRef;
  @ViewChild('divOpts') private divOpts!: ElementRef;
  protected readonly innerWidth = innerWidth;
  mode: string = 'choir';
  options: string[] = [];

  constructor(private mediaService: MediaService, private utilityService: UtilityService, private router: Router) {}

  ngAfterViewInit() {
    this.number.nativeElement.focus();
    this.start.nativeElement.classList.add('bg-' + this.mediaService.getBackground());
    document.addEventListener('keyup', this.keyListener);
  }

  private keyListener = (event: any) => this.checkKey(event);

  private checkKey(event: any) {
    switch ((<KeyboardEvent> event).code) {
      case 'Escape': this.clear(); break;
      case 'ControlLeft':
      case 'ControlRight': this.toggleMenu(); break;
      case 'Enter': this.playBtn(); break;
    }
  }

  private clear() {
    this.number.nativeElement.value = '';
    this.text.nativeElement.value = '';
    this.options = [];
  }

  private toggleMenu() {
    document.getElementById('menu')!.click();
  }

  playBtn() {
    this.mediaService.click();
    const num = this.number.nativeElement.value;
    if (!num) return;
    this.router.navigate(['/', 'player', this.mode, num]);
  }

  chooseMode(target: HTMLInputElement) {
    this.mediaService.click();
    this.deselectAll();
    target.classList.add('selected');
    this.mode = target.value === 'letra' ? 'lyrics' : target.value === 'música' ? 'music' : 'choir';
  }

  private deselectAll() {
    this.lyrics.nativeElement.classList.remove('selected');
    this.choir.nativeElement.classList.remove('selected');
    if (innerWidth > 1024) this.music.nativeElement.classList.remove('selected');
  }

  updateNumber(event: WheelEvent) {
    const numUp = event.deltaY * -1 > 0;
    let currentVal = +this.number.nativeElement.value;
    this.number.nativeElement.value = numUp ? currentVal+1 : currentVal-1;
    this.utilityService.checkNumberValidity(this.number);
    this.numberSearch(this.number.nativeElement);
  }

  numberSearch(input: HTMLInputElement) {
    if (this.isMenuOpen()) this.toggleMenu();
    this.options = [];
    this.utilityService.checkNumberValidity(this.number);
    this.text.nativeElement.value = this.utilityService.searchByNumber(input.value);
  }

  private isMenuOpen(): string | null {
    return document.getElementById('menu')!.getAttribute('opened');
  }

  textSearch(input: HTMLInputElement) {
    if (this.isMenuOpen()) this.toggleMenu();
    this.isNumber();
    this.options = this.utilityService.searchByText(input.value);
  }

  private isNumber() {
    if (this.text.nativeElement.value.length === 1 && Number.isInteger(+this.text.nativeElement.value)) {
      this.number.nativeElement.focus();
      this.number.nativeElement.value = this.text.nativeElement.value;
      this.numberSearch(this.number.nativeElement);
      this.divOpts.nativeElement.children.item(0).click();
    }
  }

  updateText(target: any) {
    this.number.nativeElement.value = (<HTMLDivElement> target).innerText.split(' - ')[0];
    this.text.nativeElement.value = (<HTMLDivElement> target).innerText.split(' - ')[1];
    this.options = [];
  }

  ngOnDestroy() {
    document.removeEventListener('keyup', this.keyListener);
  }
}
