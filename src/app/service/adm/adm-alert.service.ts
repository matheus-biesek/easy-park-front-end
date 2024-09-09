import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmAlertService {

  private apiUrl = 'http://localhost:8080/parking/send-alert';

  constructor(private http: HttpClient) { }

  sendAdmAlert(admAlert: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, { admAlert }, { responseType: 'text' as 'json' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
