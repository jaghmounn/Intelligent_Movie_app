import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentCreate, CommentRead } from '../models/comment';

@Injectable({ providedIn: 'root' })
export class CommentService {
  private base = '';
  constructor(private http: HttpClient) {}

  post(movieId: number, payload: CommentCreate): Observable<CommentRead> {
    return this.http.post<CommentRead>(`${this.base}/movies/${movieId}/comments`, payload);
  }

  list(movieId: number): Observable<CommentRead[]> {
    return this.http.get<CommentRead[]>(`${this.base}/movies/${movieId}/comments`);
  }

  reply(parentId: number, payload: CommentCreate): Observable<CommentRead> {
    return this.http.post<CommentRead>(`${this.base}/comments/${parentId}/reply`, payload);
  }

  update(id: number, payload: CommentCreate) {
    return this.http.put<CommentRead>(`${this.base}/comments/${id}`, payload);
  }

  delete(id: number) {
    return this.http.delete(`${this.base}/comments/${id}`);
  }
}
