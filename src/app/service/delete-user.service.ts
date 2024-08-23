import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  private apiUrl = 'http://18.117.250.60:8080/auth/delete-user';

  constructor(
    private http: HttpClient,
  ) {}

  deleteUser(username: string): Observable<void> {
    const options = {
      body: { username: username }
    };
    return this.http.delete<void>(this.apiUrl, options);
  }
}
