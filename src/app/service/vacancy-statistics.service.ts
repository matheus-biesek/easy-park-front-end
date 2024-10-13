import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyStatisticsService {
  private apiUrl = 'http://localhost:8080/vacancy-statistic';

  constructor(private http: HttpClient) { }

  getWeeklyVacancyOccupied(): Observable<number[][]> {
    return this.http.get<number[][]>(`${this.apiUrl}/weekly-vacancy-occupied`);
  }

  getWeeklyIdleTime(): Observable<number[][]> {
    return this.http.get<number[][]>(`${this.apiUrl}/weekly-idle-time`);
  }

  getWeeklyTurnoverRate(): Observable<number[][]> {
    return this.http.get<number[][]>(`${this.apiUrl}/weekly-turnover-rate`);
  }

  getAverageOccupationDuration(): Observable<number[][]> {
    return this.http.get<number[][]>(`${this.apiUrl}/weekly-average-occupation-duration`);
  }
}
