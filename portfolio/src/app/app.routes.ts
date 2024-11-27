import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Valentin - Analytics Engineer'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'À propos | Valentin - Analytics Engineer'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projets | Valentin - Analytics Engineer'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Portfolio | Valentin - Analytics Engineer'
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog | Valentin - Analytics Engineer'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | Valentin - Analytics Engineer'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
