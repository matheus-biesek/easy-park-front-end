import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './service/auth.service'; 
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole']; // Acessando com notação de colchetes
    const role = this.authService.getUserRole(); 

    if (role && role === expectedRole) {
      return true;
    }

    this.router.navigate(['/unauthorized']);
    return false;
  }
}
