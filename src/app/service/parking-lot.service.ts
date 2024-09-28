import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  private urlParkingBarrierClose = 'http://localhost:8080/parking-lot/close-parking-barrier';
  private urlParkingBarrierOpen = 'http://localhost:8080/parking-lot/open-parking-barrier';
  private urlSendAlert = 'http://localhost:8080/parking-lot/send-adm-alert';
  private urlStatusAlert = 'http://localhost:8080/parking-lot/collect-message-adm';

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) {}
  //ok
  closeParking(): Observable<string> {
    return this.http.put<string>(this.urlParkingBarrierClose, {}, { responseType: 'text' as 'json' })
      .pipe(
        catchError(this.utilService.handleError)
      );
  }
  //ok
  openParking(): Observable<string> {
    return this.http.put<string>(this.urlParkingBarrierOpen,{}, { responseType: 'text' as 'json' })
    .pipe(
      catchError(this.utilService.handleError)
    );
  }

  sendAdmAlert(message: string): Observable<string> {
    return this.http.put<string>(this.urlSendAlert, { message }, { responseType: 'text' as 'json' })
      .pipe(
        catchError(this.utilService.handleError)
      );
  }

  collectAdmAlert(): Observable<string> {
    return this.http.get<string>(this.urlStatusAlert, { responseType: 'text' as 'json' })
      .pipe(
        catchError(this.utilService.handleError)
      );
  }
}
