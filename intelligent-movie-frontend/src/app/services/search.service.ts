import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private base = '';
  constructor(private http: HttpClient) {}

  searchMovies(q: string, page = 1, size = 20): Observable<any> {
    return this.http.get(`${this.base}/search/movies`, { params: new HttpParams().set('q', q).set('page', String(page)).set('size', String(size)) });
  }

  searchUsers(q: string, page = 1, size = 20): Observable<any> {
    return this.http.get(`${this.base}/search/users`, { params: new HttpParams().set('q', q).set('page', String(page)).set('size', String(size)) });
  }

  searchDiscussions(q: string, page = 1, size = 20): Observable<any> {
    return this.http.get(`${this.base}/search/discussions`, { params: new HttpParams().set('q', q).set('page', String(page)).set('size', String(size)) });
  }
}
