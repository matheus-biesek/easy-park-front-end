import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateRoleUserService {
  private apiUrl = '/auth/update-role';

  constructor(
    private http: HttpClient,
  ) {}

  updateRole(userData: { username: string, role: string }): Observable<void> {
    return this.http.put<void>(this.apiUrl, userData);
  }
}
