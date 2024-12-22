import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      @for (hero of heroes; track hero.id) {
        <a [routerLink]="['/detail', hero.id]">
          {{hero.name}}
        </a>
      }
    </div>
  `,
  styles: [`
    .heroes-menu {
      padding: 0;
      margin: auto;
      max-width: 1000px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .heroes-menu a {
      background-color: #3f525c;
      border-radius: 2px;
      padding: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
      color: white;
      text-align: center;
      min-width: 120px;
      flex: 1;
    }
    
    .heroes-menu a:hover {
      background-color: #000;
    }
  `]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getTopHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}