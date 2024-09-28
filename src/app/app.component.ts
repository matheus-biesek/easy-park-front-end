import { Component, OnInit } from '@angular/core';
import { SessionService } from './service/session.service';

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
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.sessionService.userRole$.subscribe(role => {
    this.userRole = role;
    this.isAuthenticated = !!role;
    });
  }
}
