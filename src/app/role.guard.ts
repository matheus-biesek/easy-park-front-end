import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from './service/session.service'; 
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedRole = route.data['expectedRole']; // Acessando com notação de colchetes

    return this.sessionService.userRole$.pipe(
      take(1), // Para garantir que o observable complete após o primeiro valor
      map(role => {
        if (role && role === expectedRole) {
          return true;
        }

        // Redireciona se o papel não corresponder
        this.router.navigate(['/unauthorized']);
        return false;
      })
    );
  }
}
