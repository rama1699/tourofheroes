import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero-card">
      <span class="badge">{{hero.id}}</span>
      <span class="name">
        <a [routerLink]="['/detail', hero.id]">{{hero.name}}</a>
      </span>
    </div>
  `,
  styles: [`
    .hero-card {
      display: flex;
      align-items: center;
      background-color: #EEE;
      margin: 0.5rem 0;
      padding: 0.5rem;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .badge {
      display: inline-block;
      background-color: #405061;
      color: white;
      padding: 0.5rem 0.8rem;
      border-radius: 4px 0 0 4px;
      min-width: 40px;
      text-align: center;
      margin-right: 0.8rem;
    }
    
    .name {
      flex: 1;
    }
    
    .name a {
      color: #333;
      text-decoration: none;
    }
  `]
})
export class HeroCardComponent {
  @Input({ required: true }) hero!: Hero;
}