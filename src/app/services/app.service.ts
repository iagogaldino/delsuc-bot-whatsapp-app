import { Injectable } from '@angular/core';
import { UserWhatsapp } from '../models/interfaces/user-whatsapp';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  logged: boolean = false;
  conctacts: UserWhatsapp[] = [];

  constructor() { }
}
