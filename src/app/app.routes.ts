import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];