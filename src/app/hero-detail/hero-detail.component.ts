import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div *ngIf="hero" class="hero-detail">
      <h2>{{hero.name | uppercase}} Details</h2>
      <div>
        <label>id: {{hero.id}}</label>
      </div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
      </div>
      <button class="button" (click)="save()">Save</button>
      <button class="button" (click)="goBack()">Back</button>
    </div>
  `
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

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}