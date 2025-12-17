import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecommendationService {
  private base = '';
  constructor(private http: HttpClient) {}

  getRecommendations(page = 1, size = 20, source = 'hybrid'): Observable<any> {
    return this.http.get(`${this.base}/recommendations`, {
      params: new HttpParams().set('page', String(page)).set('size', String(size)).set('source', source)
    });
  }
}
