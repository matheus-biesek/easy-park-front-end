import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { SessionService } from '../../../service/session.service';

@Component({
  selector: 'app-nav-adm',
  templateUrl: './nav-adm.component.html',
  styleUrl: './nav-adm.component.css'
})
export class TopComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  logout(): void {
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }
}
