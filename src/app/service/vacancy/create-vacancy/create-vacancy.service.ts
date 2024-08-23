import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CreateVacancyService {
  private apiUrl = 'http://18.117.250.60:8080/api-vacancy/create-vacancy';

  constructor(private http: HttpClient) { }

  createVacancy(vacancy: { position: number; status: string }): Observable<string> {
    return this.http.post(this.apiUrl, vacancy, { responseType: 'text' });
  }
}
