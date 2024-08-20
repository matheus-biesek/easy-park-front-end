import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRoleSubject = new BehaviorSubject<string | null>(this.getUserRole());
  userRole$ = this.userRoleSubject.asObservable();

  constructor() { }

  getUserRole(): string | null {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return null;
    }

    const token = localStorage.getItem('authToken');

    if (!token) {
      return null;
    }

    try {
      const payload = this.parseJwt(token);

      switch (payload.role) {
        case 0:
          return 'ADMIN';
        case 1:
          return 'USER';
        default:
          return null;
      }
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('authToken');
    }
    this.userRoleSubject.next(null);
  }

  login(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('authToken', token);
      this.userRoleSubject.next(this.getUserRole()); // Atualizar a role do usuário
    }
  }

  private parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c: string) =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

    return JSON.parse(jsonPayload);
  }
}
