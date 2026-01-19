import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(false);
  authState$ = this.authState.asObservable();

  private apiUrl = 'http://localhost:8000/auth';

  // Store the username here
  private userName: string = '';  // ✅ Add this property

  constructor(private http: HttpClient) {}

  /** Login user and store token + username */
  login(email: string, password: string): Observable<{ access_token: string; username?: string }> {
    const body = new HttpParams()
      .set('username', email)
      .set('password', password);

    return this.http.post<{ access_token: string; username?: string }>(
      `${this.apiUrl}/login`,
      body.toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    ).pipe(
      tap(res => {
        localStorage.setItem('token', res.access_token);

        
        if (res.username) {
          this.userName = res.username;
        } else {
          
          this.userName = email;
        }

        this.authState.next(true); 
      })
    );
  }

  /** Register new user */
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, email, password });
  }

  /** Logout user */
  logout() {
    localStorage.removeItem('token');
    this.userName = ''; // clear username
    this.authState.next(false);
  }

  /** Get current user's name */
  getUserName(): string {
    return this.userName; // ✅ now this works
  }

  /** Check if logged in */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  /** Get token */
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
