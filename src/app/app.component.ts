import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'EasyPark-Solutions-front';

  isAuthenticated = false;
  userRole: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.userRole$.subscribe(role => {
      this.userRole = role;
      this.isAuthenticated = !!role;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
