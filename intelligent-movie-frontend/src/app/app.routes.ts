// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { HomeComponent } from './features/home/home.component';
import { MovieListComponent } from './features/movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './features/movies/movie-detail/movie-detail.component';
import { SearchComponent } from './features/search/search.component';
import { RecommendationsComponent } from './features/recommendations/recommendations.component';
import { FavoritesComponent } from './features/user-lists/favorites/favorites.component';
import { WatchlistComponent } from './features/user-lists/watchlist/watchlist.component';
import { AnalyticsComponent } from './features/admin/analytics/analytics.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'users/me/favorites', component: FavoritesComponent },
  { path: 'users/me/watchlist', component: WatchlistComponent },
  { path: 'admin/analytics', component: AnalyticsComponent },
  { path: 'auth', children: authRoutes },
  { path: '**', redirectTo: '' }
];
