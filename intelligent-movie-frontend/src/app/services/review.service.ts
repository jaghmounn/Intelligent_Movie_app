import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewCreate, ReviewRead, ReviewUpdate } from '../models/review';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private base = '';
  constructor(private http: HttpClient) {}

  create(movieId: number, payload: ReviewCreate): Observable<ReviewRead> {
    return this.http.post<ReviewRead>(`${this.base}/movies/${movieId}/reviews`, payload);
  }

  list(movieId: number): Observable<ReviewRead[]> {
    return this.http.get<ReviewRead[]>(`${this.base}/movies/${movieId}/reviews`);
  }

  update(id: number, payload: ReviewUpdate) {
    return this.http.put<ReviewRead>(`${this.base}/reviews/${id}`, payload);
  }

  delete(id: number) {
    return this.http.delete(`${this.base}/reviews/${id}`);
  }

  like(id: number) {
    return this.http.post(`${this.base}/reviews/${id}/like`, {});
  }

  dislike(id: number) {
    return this.http.post(`${this.base}/reviews/${id}/dislike`, {});
  }
}
