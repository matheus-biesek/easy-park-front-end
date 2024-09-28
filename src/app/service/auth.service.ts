import { Injectable } from '@angular/core';
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
  private urlTokenValidRole = 'http://localhost:8080/token/jwt-is-valid-role';

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) {}

  tokenIsValidAdm(): Observable<boolean> {
    const body = { role: 'ADMIN' };
    return this.http.post<boolean>(this.urlTokenValidRole, body)
      .pipe(
        catchError(this.utilService.handleError)
      );
  }
  
  tokenIsValidUser(): Observable<boolean> {
    const body = { role: 'USER' };
    return this.http.post<boolean>(this.urlTokenValidRole, body)
      .pipe(
        catchError(this.utilService.handleError)
      );
  }  

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
}
