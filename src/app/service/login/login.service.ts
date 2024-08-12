import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8080/auth/login'; 

  login(user: { userName: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
