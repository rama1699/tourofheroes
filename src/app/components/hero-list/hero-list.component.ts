import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>My Heroes</h2>
    <div class="hero-list">
      @for (hero of heroes; track hero.id) {
        <div class="hero-item">
          <span class="hero-id">{{hero.id}}</span>
          <span class="hero-name">
            <a [routerLink]="['/detail', hero.id]">{{hero.name}}</a>
          </span>
        </div>
      }
    </div>
  `,
  styles: [`
    .hero-list {
      margin: 20px 0;
    }
    .hero-item {
      background: #eee;
      margin: 8px 0;
      padding: 10px;
      cursor: pointer;
    }
    .hero-id {
      display: inline-block;
      background: #405061;
      color: white;
      padding: 4px 8px;
      margin-right: 8px;
    }
    .hero-name {
      color: #333;
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