import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReserveVacancyService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://18.117.250.60:8080/api-vacancy/vacancy-update';

  changeStatusVacancy(vacancies: { position: number; status: string }[]): Observable<string> {
    return this.http.post(this.apiUrl, vacancies, { responseType: 'text' });
  }
}
