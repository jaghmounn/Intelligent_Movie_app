import { Routes } from '@angular/router';
import { CommentCreate  } from './comment-create/comment-create';
import { CommentList } from './comment-list/comment-list';

export const COMMENTS_ROUTES: Routes = [
   { path: 'comment-create', component: CommentCreate },
   { path: 'comment-list', component: CommentList },
  // Add more routes as needed
];

export default COMMENTS_ROUTES;