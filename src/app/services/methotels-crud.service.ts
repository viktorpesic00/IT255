import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MethotelsCrudService {
  private baseUrl = 'http://localhost:3000/metHotels';

  constructor(private http: HttpClient) {}

  getMetHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMetHotel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMetHotel(metHotel: object): Observable<object> {
    return this.http.post(this.baseUrl, metHotel);
  }

  updateMetHotel(value: any, id: number): Observable<object> {
    return this.http.put(this.baseUrl + '/' + id, value);
  }

  deleteMetHotel(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
