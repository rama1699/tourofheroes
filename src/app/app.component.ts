import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Tour of Heroes</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      margin-bottom: 0;
      color: #264D73;
    }
    nav {
      margin: 1rem 0;
    }
    nav a {
      padding: 1rem;
      text-decoration: none;
      margin: 10px;
      display: inline-block;
      background-color: #e8e8e8;
      color: #3d3d3d;
      border-radius: 4px;
    }
    nav a:hover {
      color: white;
      background-color: #42545C;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
}