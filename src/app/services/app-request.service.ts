import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { UserWhatsapp } from '../models/interfaces/user-whatsapp';

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
}
