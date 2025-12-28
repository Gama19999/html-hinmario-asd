import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-logo',
  imports: [NgStyle],
  templateUrl: './logo.html',
})
export class Logo {
  @Input('og-color') ogColor: boolean = false;
}
