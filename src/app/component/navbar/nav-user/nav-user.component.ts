import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { SessionService } from '../../../service/session.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrl: './nav-user.component.css'
})
export class NavUserComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  logout(): void {
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }
}
