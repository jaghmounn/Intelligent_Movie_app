import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieBrief, MovieDetail } from '../models/movie';
import { PaginatedResponse } from '../models/pagination';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private base = '';
  constructor(private http: HttpClient) {}

  list(params?: any): Observable<PaginatedResponse<MovieBrief>> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(k => {
        if (params[k] != null) {
          httpParams = httpParams.set(k, params[k]);
        }
      });
    }
    return this.http.get<PaginatedResponse<MovieBrief>>(`${this.base}/movies`, { params: httpParams });
  }

  get(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.base}/movies/${id}`);
  }

  getTrailers(id: number): Observable<any> {
    return this.http.get<any>(`${this.base}/movies/${id}/trailers`);
  }

  getCast(id: number): Observable<any> {
    return this.http.get<any>(`${this.base}/movies/${id}/cast`);
  }

  search(q: string, page = 1, size = 20): Observable<PaginatedResponse<MovieBrief>> {
    return this.http.get<PaginatedResponse<MovieBrief>>(`${this.base}/search/movies`, {
      params: new HttpParams().set('q', q).set('page', String(page)).set('size', String(size))
    });
  }
}
