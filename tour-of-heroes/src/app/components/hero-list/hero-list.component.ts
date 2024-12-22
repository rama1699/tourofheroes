import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from '../shared/hero-card/hero-card.component';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, HeroCardComponent],
  template: `
    <h2>My Heroes</h2>
    <div class="heroes">
      @for (hero of heroes; track hero.id) {
        <app-hero-card [hero]="hero" />
      }
    </div>
  `,
  styles: [`
    .heroes {
      margin: 0 0 2rem 0;
      list-style-type: none;
      padding: 0;
      width: 100%;
      max-width: 450px;
    }
  `]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}