import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

interface RoleValidationResponse {
  isValidAdmin: boolean;
  isValidUser: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole$ = this.userRoleSubject.asObservable();

  constructor(private authService: AuthService) {
    this.checkUserRole(); // Verifica a role do usuário no início
  }

  private checkUserRole(): void {
    // Verifica se o token existe
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        this.userRoleSubject.next(null);
        return;
    }

    const token = localStorage.getItem('authToken');
    if (!token) {
        this.userRoleSubject.next(null);
        return;
    }

    // Usa forkJoin para verificar ambas as roles simultaneamente
    forkJoin({
        isValidAdmin: this.authService.tokenIsValidAdm(),
        isValidUser: this.authService.tokenIsValidUser()
    })
    .pipe(
        catchError(() => {
            this.userRoleSubject.next(null);
            return [{ isValidAdmin: false, isValidUser: false }]; // Retorna valores padrão em caso de erro
        })
    )
    .subscribe(({ isValidAdmin, isValidUser }: RoleValidationResponse) => {
      if (isValidAdmin) {
        this.userRoleSubject.next('ADMIN');
      } else if (isValidUser) {
          this.userRoleSubject.next('USER');
        } else {
            localStorage.removeItem("authToken");
            this.userRoleSubject.next(null);
          }
    });
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.userRoleSubject.next(null);
  }

  login(token: string): void {
    localStorage.setItem('authToken', token);
    this.checkUserRole(); // Verifica a role do usuário após o login
  }
}
