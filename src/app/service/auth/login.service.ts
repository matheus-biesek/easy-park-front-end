import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  private apiUrl = '/auth/login'; 

  login(credentials: { username: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials);
  }
}
