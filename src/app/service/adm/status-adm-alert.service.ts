import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusAdmAlertService {

  private apiUrl = 'http://localhost:8080/esp32/adm-alert'; // URL da sua API

  constructor(private http: HttpClient) { }

  getAdmAlert(): Observable<string> {
    return this.http.get<string>(this.apiUrl, { responseType: 'text' as 'json' });
  }
}
