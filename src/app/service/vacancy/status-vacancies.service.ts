import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusVacanciesService {

  private apiUrl = 'http://localhost:8080/api-vacancy/status-all-vacancy';

  constructor(private http: HttpClient) { }

  createVacancy(vacancy: { position: number; status: string }): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
