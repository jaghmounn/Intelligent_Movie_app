import { Routes } from '@angular/router';
import { ReviewCreate  } from './review-create/review-create';
import { ReviewList } from './review-list/review-list';


export const REVIEWS_ROUTES: Routes = [
   { path: 'review-list', component: ReviewList },
   { path: 'review-create', component: ReviewCreate },
  // Add more routes as needed
];