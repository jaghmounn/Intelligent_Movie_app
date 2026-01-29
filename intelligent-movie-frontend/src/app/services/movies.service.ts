import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private api: ApiService) {}

  getPopular(): Observable<any> {
    return this.api.get('/movies/popular');
  }

  getDetails(id: number): Observable<any> {
    return this.api.get(`/movies/${id}`);
  }

  getCredits(id: number): Observable<any> {
    return this.api.get(`/movies/${id}/credits`);
  }

  getVideos(id: number): Observable<any> {
    return this.api.get(`/movies/${id}/videos`);
  }

  getRecommendations(id: number): Observable<any> {
    return this.api.get(`/movies/${id}/recommendations`);
  }
}
