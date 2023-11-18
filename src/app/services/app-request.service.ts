import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { UserWhatsapp } from '../models/interfaces/user-whatsapp';
import { Schedule } from '../models/interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class AppRequestService {

  private baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  getContacts(): Observable<any> {
    const url = `${this.baseUrl}/get-contacts`;
    return this._http.get<UserWhatsapp[]>(url).pipe(
      tap(items => items.forEach(item => item.selected = false))
    );
    // return of(CONTACTS)
  }

  addCalendar(params: any): Observable<any> {
    const url = `${this.baseUrl}/add-calendar`;
    return this._http.post(url, params);
  }

  deleteCalendar(key: string): Observable<any> {
    const url = `${this.baseUrl}/remove-calendar/${key}`;
    return this._http.delete(url);
  }

  getCalendar(): Observable<Schedule[]> {
    const url = `${this.baseUrl}/get-calendar`;
    return this._http.get<Schedule[]>(url);
  }

  login(params: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this._http.post(url, params);
  }

}
