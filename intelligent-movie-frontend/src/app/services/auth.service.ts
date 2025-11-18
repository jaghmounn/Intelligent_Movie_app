import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.access_token);
      })
    );
  }

  register(name: string, email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/register`, { name, email, password });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
