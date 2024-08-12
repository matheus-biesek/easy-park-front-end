import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserClientService {

  private apiUrl = 'http://localhost:8080/auth/register-user-client'; 

  constructor(private http: HttpClient) { }

  registerUserClient(user: { userName: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
