import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReserveVacancyService {

  constructor(private http: HttpClient) {}

  private apiUrl = '/api-vacancy/vacancy-update';

  changeStatusVacancy(vacancies: { position: number; status: string }[]): Observable<string> {
    return this.http.post(this.apiUrl, vacancies, { responseType: 'text' });
  }
}
