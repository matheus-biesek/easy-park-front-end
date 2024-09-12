import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StatusVacanciesService {

  private apiUrl = '/api-vacancy/status-all-vacancy';

  constructor(private http: HttpClient) { }

  statusVacancies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
