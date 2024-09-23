import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlDeleteUser = 'http://localhost:8080/auth/delete-user';
  private urlLoginAuth = 'http://localhost:8080/auth/login';
  private urlRegisterAdm = 'http://localhost:8080/auth/register-adm';
  private urlResgisterUser = 'http://localhost:8080/auth/register-client';
  private urlUpdateRole = 'http://localhost:8080/auth/update-role';

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) {}

  updateRole(userData: { username: string, role: string }): Observable<string> {
    return this.http.put<string>(this.urlUpdateRole, userData, { responseType: 'text' as 'json' })
      .pipe(
        catchError(this.utilService.handleError)
      );
  }  

  registerUserClient(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.urlResgisterUser, user)
    .pipe(
      catchError(this.utilService.handleError)
    );
  }

  registerUserAdmin(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.urlRegisterAdm, user)
    .pipe(
      catchError(this.utilService.handleError)
    );
  }

  loginAuth(credentials: { username: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.urlLoginAuth, credentials)
    .pipe(
      catchError(this.utilService.handleError)
    );
  }

  deleteUser(username: string): Observable<string> {
    const options = {
      body: { username: username }
    };
    return this.http.delete<string>(this.urlDeleteUser, { responseType: 'text' as 'json', ...options })
    .pipe(
      catchError(this.utilService.handleError)
    );
  }

  // UTILS para a quebrado do token do usuario e verificar a role
  private userRoleSubject = new BehaviorSubject<string | null>(this.getUserRole());
  userRole$ = this.userRoleSubject.asObservable();
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
      this.userRoleSubject.next(this.getUserRole());
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
