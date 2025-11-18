import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.errorMsg = '';
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/movies']),
      error: err => {
        console.error(err);
        this.errorMsg = err.error?.detail || 'Invalid credentials';
      }
    });
  }
}
