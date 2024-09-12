import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserAdmService {

  private apiUrl = 'http://localhost:8080/auth/register-adm'; 

  constructor(
    private http: HttpClient
  ) {}

  registerUserAdmin(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
