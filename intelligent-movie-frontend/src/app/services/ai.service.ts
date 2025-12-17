import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AiService {
  private base = '';
  constructor(private http: HttpClient) {}

  reviewSummary(payload: { review_id?: number; text?: string }): Observable<any> {
    return this.http.post(`${this.base}/ai/review-summary`, payload);
  }

  discussionSuggestion(movieId: number): Observable<any> {
    return this.http.post(`${this.base}/ai/discussion-suggestion`, { movie_id: movieId });
  }

  movieAnalysis(movieId: number, options: any = {}): Observable<any> {
    return this.http.post(`${this.base}/ai/movie-analysis`, { movie_id: movieId, options });
  }
}
