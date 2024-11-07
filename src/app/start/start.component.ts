import { Component, ElementRef, ViewChild } from '@angular/core';

import { SoundService } from '../services/sound.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  @ViewChild('lyrics') private lyrics!: ElementRef;
  @ViewChild('music') private music!: ElementRef;
  @ViewChild('choir') private choir!: ElementRef;
  protected readonly innerWidth = innerWidth;
  options = [];

  constructor(private soundService: SoundService) {}

  chooseMode(target: HTMLInputElement) {
    this.deselectAll();
    this.soundService.tap();
    target.setAttribute('data-selected', '1');
    target.classList.add('selected');
  }

  private deselectAll() {
    this.lyrics.nativeElement.setAttribute('data-selected', '0');
    this.lyrics.nativeElement.classList.remove('selected');
    this.choir.nativeElement.setAttribute('data-selected', '0');
    this.choir.nativeElement.classList.remove('selected');
    if (innerWidth > 1024) {
      this.music.nativeElement.setAttribute('data-selected', '0');
      this.music.nativeElement.classList.remove('selected');
    }
  }

  initHymn() {
    this.soundService.tap();
  }
}
