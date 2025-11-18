import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';
  errorMsg = '';
  successMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.errorMsg = '';
    this.successMsg = '';

    this.auth.register(this.name, this.email, this.password).subscribe({
      next: () => {
        this.successMsg = 'Registration successful. Redirecting to login...';
        setTimeout(() => this.router.navigate(['/auth/login']), 1500);
      },
      error: err => {
        console.error(err);
        this.errorMsg = err.error?.detail || 'Registration failed';
      }
    });
  }
}
