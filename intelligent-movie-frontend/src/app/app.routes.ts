// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', children: authRoutes },
  { path: '**', redirectTo: '' }
];
