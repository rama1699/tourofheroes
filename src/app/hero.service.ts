import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

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

  updateHero(hero: Hero): Observable<Hero> {
    const index = HEROES.findIndex(h => h.id === hero.id);
    if (index > -1) {
      HEROES[index] = hero;
    }
    return of(hero);
  }
}