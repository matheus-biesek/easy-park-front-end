import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloseParkingService {
  private apiUrl = 'http://localhost:8080/parking/close';

  constructor(private http: HttpClient) { }

  closeParking(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }  
}
