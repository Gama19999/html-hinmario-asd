import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MediaService } from '../services/media.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements AfterViewInit {
  @ViewChild('lyrics') private lyrics!: ElementRef;
  @ViewChild('music') private music!: ElementRef;
  @ViewChild('choir') private choir!: ElementRef;
  @ViewChild('number') private number!: ElementRef;
  @ViewChild('text') private text!: ElementRef;
  @ViewChild('divOpts') private divOpts!: ElementRef;
  protected readonly innerWidth = innerWidth;
  mode: string = 'choir';
  options: string[] = [];

  constructor(private soundService: MediaService, private utilityService: UtilityService, private router: Router) {}

  ngAfterViewInit() {
    this.number.nativeElement.focus();
    document.addEventListener('keyup', (event: any) => this.checkKey(event));
  }

  checkKey(event: any) {
    switch ((<KeyboardEvent> event).code) {
      case 'Escape':
        this.number.nativeElement.value = '';
        this.text.nativeElement.value = '';
        this.options = [];
        break;
      case 'Enter': this.playBtn(); break;
    }
  }

  chooseMode(target: HTMLInputElement) {
    this.soundService.click();
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
    this.checkNumberValidity();
    this.numberSearch(this.number.nativeElement);
  }

  numberSearch(input: HTMLInputElement) {
    this.options = [];
    this.checkNumberValidity();
    this.text.nativeElement.value = this.utilityService.searchByNumber(input.value);
  }

  private checkNumberValidity() {
    if (this.number.nativeElement.value.length > 3) // More than 3 digits
      this.number.nativeElement.value = this.number.nativeElement.value.substring(0,3);
    if (+this.number.nativeElement.value < 0) this.number.nativeElement.value = '1'; // Value less than 1
    if (+this.number.nativeElement.value === 0) this.number.nativeElement.value = ''; // Value equal 0
    if (+this.number.nativeElement.value > 614) this.number.nativeElement.value = '614'; // Value greater than 614
    if (this.number.nativeElement.value.indexOf('e')) // Symbol of e
      this.number.nativeElement.value = this.number.nativeElement.value.replace('e','');
  }

  textSearch(input: HTMLInputElement) {
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

  playBtn() {
    this.soundService.click();
    const num = this.number.nativeElement.value;
    if (!num) return;
    this.router.navigate(['/', 'player', this.mode, num]);
  }
}
