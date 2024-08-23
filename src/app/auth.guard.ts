import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  private apiUrl = 'http://18.117.250.60:8080/auth/token-is-valid';

  canActivate(): Observable<boolean> {
    if (typeof window === 'undefined') {
      return of(false);
    }
  
    const authToken = localStorage.getItem('authToken');
    
    if (!authToken) {
      this.router.navigate(['/login']);
      return of(false);
    }
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
  
    return this.http.post<boolean>(this.apiUrl, { token: authToken }, { headers }).pipe(
      map(isValid => {
        if (isValid) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
