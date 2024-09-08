import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenParkingService {
  private apiUrl = 'http://localhost:8080/parking-barrier/open';

  constructor(private http: HttpClient) { }

  openParking(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
