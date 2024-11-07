import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Dictionary } from '../models/dictionary.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  private dictionary: Dictionary;
  mode!: string;
  num!: string;
  nom!: string;

  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.route.url.subscribe(url => {
      this.mode = url[1].path;
      this.num = url[2].path;
    });
    this.dictionary = new Dictionary();
    this.nom = this.dictionary.searchByNumber(this.num);
    this.titleService.setTitle('HA7D | ' + this.num);
  }
}
