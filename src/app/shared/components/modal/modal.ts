import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [NgStyle],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input('width') width: string = '50%';
  @Input('height') height: string = '30%';
  @Output('close') close: EventEmitter<void> = new EventEmitter();

  constructor() {}

  closeModal() { this.close.emit(); }
}
