import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UtilService } from './util.service';
import { EnumGate } from '../interface/enum-gate.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  private urlChangeGateStatus = 'http://localhost:8080/parking-lot/change-gate-status';
  private urlSendAlert = 'http://localhost:8080/parking-lot/send-message-adm';
  private urlStatusAlert = 'http://localhost:8080/parking-lot/get-message-adm';

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) {}
  
  changeGateStatus(gate: EnumGate, status: boolean): Observable<string> {
    const body = { gate, status };  // Corpo da requisição com os parâmetros esperados
    return this.http.put<string>(this.urlChangeGateStatus, body, { responseType: 'text' as 'json' })
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
