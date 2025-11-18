import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/auth';

  constructor(private http: HttpClient) {}

login(email: string, password: string) {
  const body = new HttpParams()
    .set('username', email)
    .set('password', password);

  return this.http.post<{ access_token: string }>(
    `${this.apiUrl}/login`,
    body.toString(),
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  ).pipe(
    tap(res => localStorage.setItem('token', res.access_token))
  );
}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, email, password });
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
