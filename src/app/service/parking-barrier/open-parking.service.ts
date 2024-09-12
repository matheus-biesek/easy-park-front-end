import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenParkingService {
  private apiUrl = 'http://localhost:8080/parking/open';

  constructor(private http: HttpClient) { }

  openParking(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }  
}
