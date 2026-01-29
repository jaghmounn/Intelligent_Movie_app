import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private api: ApiService) {}

  search(query: string): Observable<any> {
    return this.api.get('/search', { q: query });
  }
}
