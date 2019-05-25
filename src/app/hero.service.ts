import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServico: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageServico.add('HeroService: heróis buscados');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageServico.add(`HeroService: heroi buscado id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

