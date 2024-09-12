import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserUserService {

  private apiUrl = 'http://localhost:8080/auth/register-client'; 

  constructor(
    private http: HttpClient
  ) {}

  registerUserClient(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
