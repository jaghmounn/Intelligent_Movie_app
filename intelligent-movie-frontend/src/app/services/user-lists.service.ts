import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserListsService {
  private base = '';
  constructor(private http: HttpClient) {}

  addFavorite(movieId: number) {
    return this.http.post(`${this.base}/movies/${movieId}/favorite`, {});
  }

  removeFavorite(movieId: number) {
    return this.http.delete(`${this.base}/movies/${movieId}/favorite`);
  }

  getFavorites() {
    return this.http.get(`${this.base}/users/me/favorites`);
  }

  addWatchlist(movieId: number) {
    return this.http.post(`${this.base}/movies/${movieId}/watchlist`, {});
  }

  removeWatchlist(movieId: number) {
    return this.http.delete(`${this.base}/movies/${movieId}/watchlist`);
  }

  getWatchlist() {
    return this.http.get(`${this.base}/users/me/watchlist`);
  }
}
