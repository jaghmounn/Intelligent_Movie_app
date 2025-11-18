import { Routes } from '@angular/router';
import { MovieList} from './movie-list/movie-list';
import { MovieDetail } from './movie-detail/movie-detail';
import { MovieCreate } from './movie-create/movie-create';
import { authGuard } from '../../core/guards/auth.guard';

export const MOVIES_ROUTES: Routes = [

      { path: '', component: MovieList},
      { path: 'create', component: MovieCreate },
      { path: 'detail', component: MovieDetail },

  
];
