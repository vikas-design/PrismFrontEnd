import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Api {
  
  private baseUrl = 'https://localhost:7007/api';

  constructor(private http: HttpClient) { }

  // GET API
  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getData`);
  }

  // POST API
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Auth`, data);
  }
}
