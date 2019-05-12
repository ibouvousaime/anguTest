import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from './hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  h:Hero;
  list:Hero[];
constructor(private service: HeroService) {
    this.h = new Hero(0, "","");
    this.list = [] /// temp
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    console.log("clicked");
    this.service.writeMessage("hero whose id = "+ hero.id + " has been selected")
    this.h = hero;

  }
  ngOnInit() {
  }
  getHeroes(): void {
    this.service.getHeroes()
      .subscribe(list => this.list = list);
  }
}
