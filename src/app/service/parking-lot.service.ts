import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  private urlParkingBarrierClose = 'http://localhost:8080/parking/close';
  private urlParkingBarrierOpen = 'http://localhost:8080/parking/open';
  private urlSendAlert = 'http://localhost:8080/parking/send-alert';
  private urlStatusAlert = 'http://localhost:8080/esp32/adm-alert';

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) {}

  closeParking(): Observable<string> {
    return this.http.get(this.urlParkingBarrierClose, { responseType: 'text' })
    .pipe(
      catchError(this.utilService.handleError)
    );
  }

  openParking(): Observable<string> {
    return this.http.get(this.urlParkingBarrierOpen, { responseType: 'text' })
    .pipe(
      catchError(this.utilService.handleError)
    );
  }

  sendAdmAlert(admAlert: string): Observable<string> {
    return this.http.post<string>(this.urlSendAlert, { admAlert }, { responseType: 'text' as 'json' })
      .pipe(
        catchError(this.utilService.handleError)
      );
  }

  getAdmAlert(): Observable<string> {
    return this.http.get<string>(this.urlStatusAlert, { responseType: 'text' as 'json' })
      .pipe(
        catchError(this.utilService.handleError)
      );
  }

}
