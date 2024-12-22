import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    @if (hero) {
      <div>
        <h2>{{hero.name}} Details</h2>
        <div>id: {{hero.id}}</div>
        <div>
          <label for="hero-name">Hero name: </label>
          <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
        </div>
        <button (click)="goBack()">Back</button>
      </div>
    }
  `,
  styles: [`
    label {
      color: #435960;
      font-weight: bold;
    }
    input {
      font-size: 1em;
      padding: .5rem;
    }
    button {
      margin-top: 20px;
      background-color: #eee;
      padding: 1rem;
      border-radius: 4px;
      font-size: 1rem;
    }
    button:hover {
      background-color: #cfd8dc;
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