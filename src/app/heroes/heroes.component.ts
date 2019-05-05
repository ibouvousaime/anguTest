import { Component, OnInit } from '@angular/core';
import {Hero} from 'hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() {
    this.h = new Hero();
    h.id = 121
    h.power = "immortal"

  }

  ngOnInit() {
  }

}
