import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloseParkingService {
  private apiUrl = 'http://localhost:8080/parking-barrier/close';

  constructor(private http: HttpClient) { }

  closeParking(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
