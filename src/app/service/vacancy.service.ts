import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private urlCreateVacancy = 'http://localhost:8080/api-vacancy/create-vacancy';
  private urlDeleteVacancy = 'http://localhost:8080/api-vacancy/delete-vacancy';
  private urlVacancyUpdate = 'http://localhost:8080/api-vacancy/reserved-vacancy';
  private urlStatusAllVacancy = 'http://localhost:8080/api-vacancy/status-all-vacancy';

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) {}

  statusVacancies(): Observable<any> {
    return this.http.get<any>(this.urlStatusAllVacancy)
    .pipe(
      catchError(this.utilService.handleError)
    );
  }

  changeStatusVacancy(vacancy: { position: number; status: string }): Observable<string> {
    return this.http.post(this.urlVacancyUpdate, vacancy, { responseType: 'text' })
      .pipe(
        catchError(this.utilService.handleError)
      );
  }
  

  deleteVacancy(position: number): Observable<string> {
    return this.http.post<string>(this.urlDeleteVacancy, { position }, { responseType: 'text' as 'json' })
      .pipe(
        catchError(this.utilService.handleError)
      );
  }

  createVacancy(vacancy: { position: number; status: string }): Observable<string> {
    return this.http.post(this.urlCreateVacancy, vacancy, { responseType: 'text' })
    .pipe(
      catchError(this.utilService.handleError)
    );
  }
}
