import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    @if (hero) {
      <div class="hero-detail">
        <h2>{{hero.name | uppercase}} Details</h2>
        <div class="hero-info">
          <div>id: {{hero.id}}</div>
          <div class="form-group">
            <label for="hero-name">Hero name: </label>
            <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
          </div>
        </div>
        <button (click)="goBack()">Back</button>
      </div>
    }
  `,
  styles: [`
    .hero-detail {
      margin: 1rem 0;
    }
    
    .hero-info {
      margin: 1rem 0;
    }
    
    .form-group {
      margin: 1rem 0;
    }
    
    label {
      color: #435960;
      font-weight: bold;
      margin-right: 0.5rem;
    }
    
    input {
      font-size: 1rem;
      padding: 0.5rem;
      width: 100%;
      max-width: 300px;
    }
  `]
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}