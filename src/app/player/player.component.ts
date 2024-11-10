import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { LyricsService } from '../services/lyrics.service';
import { SoundService } from '../services/sound.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements AfterViewInit {
  @ViewChild('lyrics') private lyrics!: ElementRef;
  @ViewChild('prev') private prev!: ElementRef;
  @ViewChild('action') private action!: ElementRef;
  @ViewChild('next') private next!: ElementRef;
  @ViewChild('home') private home!: ElementRef;
  private mode!: string;
  private num!: string;
  private name!: string;

  constructor(private route: ActivatedRoute, private titleService: Title, private soundService: SoundService,
              private lyricsService: LyricsService, private router: Router, private utilityService: UtilityService) {
    this.route.url.subscribe(url => {
      this.mode = url[1].path;
      this.num = url[2].path;
      this.name = this.utilityService.searchByNumber(this.num);
    });
    this.titleService.setTitle('HA7D | ' + this.num);
  }

  ngAfterViewInit() {
    this.init();
    document.addEventListener('keyup', (event: any) => this.checkKey(event));
  }

  private init() {
    switch (this.mode) {
      case 'lyrics': this.lyricsService.loadLyrics(this.num, this.lyrics.nativeElement); break;
      case 'music':
        this.lyricsService.loadLyrics(this.num, this.lyrics.nativeElement);
        this.soundService.loadMusic(this.num);
        break;
      case 'choir':
        this.lyricsService.loadLyrics(this.num, this.lyrics.nativeElement);
        this.soundService.loadChoir(this.num);
        break;
      default: console.log('Unknown mode!');
    }
  }

  checkKey(event: any) {
    switch ((<KeyboardEvent> event).code) {
      case 'ArrowRight': this.next.nativeElement.click(); break;
      case 'ArrowLeft': this.prev.nativeElement.click(); break;
      case 'Space': this.action.nativeElement.click(); break;
      case 'ArrowDown': this.home.nativeElement.click(); break;
    }
  }

  goHome() {
    this.soundService.reset();
    this.lyricsService.reset();
    this.router.navigate(['/', 'start']);
  }

  doPrev() {
    this.lyricsService.prev();
  }

  doAction(){
    this.soundService.doAction(this.action.nativeElement);
  }

  doNext() {
    this.lyricsService.next();
  }
}
