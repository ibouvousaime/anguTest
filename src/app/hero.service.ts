import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  list: Hero[];
  constructor(private messageService: MessageService) {
    this.list = new Array();
  }

  generateHero(id):Hero {
    return new Hero(id,generateString(10),generateString(5));
  }
  generateHeroes(count) {
    for (let i =0; i < count; i++) {
      this.list.push(this.generateHero(index + i + 1));
      index++;
    }
  }
  getHeroes():Observable<Hero[]>  {
    this.generateHeroes(5);
    this.messageService.add('HeroService: generated heroes');
    return of(this.list);
  }
  writeMessage(msg) {
    this.messageService.add(msg);
  }
}

function generateString(len) {
    var result  = "";
    var alpha = "abcdefjhijklmopqrstuvwxyz"
    for(let i =0; i < len; i++) {
      result += alpha[Math.floor(Math.random() * 26)];
    }
    return result;
  }

var list:Hero[] = new Array();
var index: number = 1;
