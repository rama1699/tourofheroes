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
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .heroes-menu a {
      background-color: #3f525c;
      padding: 1rem;
      border-radius: 4px;
      text-align: center;
      color: white;
      text-decoration: none;
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