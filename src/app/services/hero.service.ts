import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero | undefined> {
    return of(HEROES.find(hero => hero.id === id));
  }

  getTopHeroes(): Observable<Hero[]> {
    return of(HEROES.slice(1, 5));
  }
}