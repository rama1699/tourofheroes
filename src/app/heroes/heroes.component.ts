import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes-list">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span>
        <span>{{hero.name}}</span>
        <button class="button" routerLink="/detail/{{hero.id}}">
          View Details
        </button>
      </li>
    </ul>
  `
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}