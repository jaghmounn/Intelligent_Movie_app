import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private base = '';
  constructor(private http: HttpClient) {}

  popularMovies(period = '7d', limit = 20): Observable<any> {
    return this.http.get(`${this.base}/analytics/popular-movies`, { params: { period, limit: String(limit) } as any });
  }

  topReviewers(period = '30d', limit = 50): Observable<any> {
    return this.http.get(`${this.base}/analytics/top-reviewers`, { params: { period, limit: String(limit) } as any });
  }

  trendingDiscussions(period = '7d', limit = 20): Observable<any> {
    return this.http.get(`${this.base}/analytics/trending-discussions`, { params: { period, limit: String(limit) } as any });
  }
}
