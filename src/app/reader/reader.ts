import { Component, effect, ElementRef, inject, input, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { fromEvent, Subscription } from 'rxjs';

import { es } from '../../assets/language/es.strings';
import { StateService } from '../shared/services/state.service';
import { loadNextImageSource, loadPrevImageSource } from '../shared/util/media.functions';
import { path } from '../app.routes';

@Component({
  selector: 'app-reader',
  imports: [],
  templateUrl: './reader.html',
  styleUrl: './reader.css',
})
export class Reader implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly titleSrv = inject(Title);
  private readonly stateSrv = inject(StateService);
  private subs: Subscription[] = [];
  protected readonly str = es.reader;
  numeral = input.required<string>(); // route param /player/:numeral
  imageViewer = viewChild<ElementRef<HTMLImageElement>>('imageViewer');

  constructor() {
    effect(() => {
      this.titleSrv.setTitle(`HASD | ${this.numeral()}`);
      if (this.imageViewer()) {
        loadNextImageSource(this.imageViewer()!.nativeElement, this.numeral());
      }
    });
  }
  
  ngOnInit(): void {
    this.subs.push(fromEvent<KeyboardEvent>(window, 'keyup').subscribe(this.keyListener));
  }

  private keyListener = (evt: KeyboardEvent) => {
    switch (evt.code) {
      case 'Escape':
      case 'Backspace': this.exitReader(); break;
      case 'ArrowLeft': this.prev(); break;
      case 'ArrowRight': this.next(); break;
    }
  }

  exitReader() {
    this.stateSrv.playlistShown$.next(true);
    this.router.navigate([path.search]);
  }

  prev() {
    const imgEl = this.imageViewer()!.nativeElement;
    loadPrevImageSource(imgEl, this.numeral());
  }

  next() {
    const imgEl = this.imageViewer()!.nativeElement;
    loadNextImageSource(imgEl, this.numeral());
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
