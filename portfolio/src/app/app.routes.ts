import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Portfolio', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
