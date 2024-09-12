import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DeleteVacancyService {

  constructor(private http: HttpClient) { }

  private apiUrl = '/api-vacancy/delete-vacancy';

  deleteVacancy(position: number): Observable<string> {
    return this.http.post<string>(this.apiUrl, { position }, { responseType: 'text' as 'json' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
