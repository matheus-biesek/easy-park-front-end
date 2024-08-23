import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StatusVacanciesService {

  private apiUrl = 'http://18.117.250.60:8080/api-vacancy/status-all-vacancy';

  constructor(private http: HttpClient) { }

  statusVacancies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
