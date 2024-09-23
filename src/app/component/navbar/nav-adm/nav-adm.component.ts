import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-nav-adm',
  templateUrl: './nav-adm.component.html',
  styleUrl: './nav-adm.component.css'
})
export class TopComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
