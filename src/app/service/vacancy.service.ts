import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private urlCreateVacancy = 'http://localhost:8080/vacancy/create-vacancy';
  private urlDeleteVacancy = 'http://localhost:8080/vacancy/delete-vacancy';
  private urlStatusAllVacancy = 'http://localhost:8080/vacancy/status-all-vacancy';

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) {}
  //ok
  statusVacancies(): Observable<any> { // retorno é uma lista da classe vaga
    return this.http.get<any>(this.urlStatusAllVacancy)
    .pipe(
      catchError(this.utilService.handleError)
    );
  }  
  // ok
  deleteVacancy(position: number): Observable<string> {
    const options = {
      body: { position },
      responseType: 'text' as 'json'
    };
    return this.http.delete<string>(this.urlDeleteVacancy, options)
      .pipe(
        catchError(this.utilService.handleError)
      );
  }  
  // ok
  createVacancy(position: number): Observable<string> {
    const body = { position };
    return this.http.post(this.urlCreateVacancy, body, { responseType: 'text' })
      .pipe(
        catchError(this.utilService.handleError)
      );
  }  
}
