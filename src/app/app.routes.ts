import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'metodolcw', loadComponent: () => import('./pages/metodolcw/metodolcw.component').then(m => m.MetodolcwComponent) },
  {
    path: '**',
    redirectTo: '',
  },
];
