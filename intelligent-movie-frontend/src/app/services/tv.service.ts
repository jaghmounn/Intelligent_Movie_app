import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TVService {
  constructor(private api: ApiService) {}

  getPopular(): Observable<any> {
    return this.api.get('/tv/popular');
  }

  getDetails(id: number): Observable<any> {
    return this.api.get(`/tv/${id}`);
  }

  getCredits(id: number): Observable<any> {
    return this.api.get(`/tv/${id}/credits`);
  }

  getVideos(id: number): Observable<any> {
    return this.api.get(`/tv/${id}/videos`);
  }
}
