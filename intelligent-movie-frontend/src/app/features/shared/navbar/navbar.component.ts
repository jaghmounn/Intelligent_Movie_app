import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userName = '';
  private authSub!: Subscription;
  isMenuOpen = false; // for mobile toggle

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSub = this.authService.authState$.subscribe(state => {
      this.isAuthenticated = state;
      this.userName = state ? this.authService.getUserName() : '';
    });
  }

  logout() {
    this.authService.logout();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
