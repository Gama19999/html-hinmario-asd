import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ExitGuard, ExitGuardType } from '../guards/exit.guard';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements AfterViewInit, ExitGuard {
  @ViewChild('lyrics') private lyrics!: ElementRef;
  @ViewChild('action') private action!: ElementRef;
  @ViewChild('home') private home!: ElementRef;
  private mode!: string;
  private num!: string;

  constructor(private route: ActivatedRoute, private titleService: Title, private mediaService: MediaService, private router: Router) {
    this.route.url.subscribe(url => {
      this.mode = url[1].path;
      this.num = url[2].path;
    });
    this.titleService.setTitle('HA7D | ' + this.num);
  }

  ngAfterViewInit() {
    this.init();
    document.addEventListener('keyup', (event: any) => this.checkKey(event));
  }

  private init() {
    switch (this.mode) {
      case 'lyrics': this.mediaService.loadLyrics(this.num, this.lyrics); break;
      case 'music': this.mediaService.loadMusic(this.num, this.lyrics); break;
      case 'choir': this.mediaService.loadChoir(this.num, this.lyrics); break;
      default: console.log('Unknown mode!');
    }
  }

  checkKey(event: any) {
    switch ((<KeyboardEvent> event).code) {
      case 'Backspace': this.home.nativeElement.click(); break;
      case 'Space': this.action.nativeElement.click(); break;
    }
  }

  goHome() {
    this.mediaService.reset();
    this.router.navigate(['/', 'start']);
  }

  doAction(){
    this.mediaService.doAction(this.action.nativeElement);
  }

  canExit(): ExitGuardType {
    if (this.mediaService.isPlaying) {
      this.mediaService.reset();
      return true;
    } else return true;
  }
}
