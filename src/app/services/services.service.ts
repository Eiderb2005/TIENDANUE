import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { tipificacion } from '../models/tipificacion';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  API_URI1 = '';
  
  constructor(private http1: HttpClient) { }

  envio() {
    return this.http1.get(`${this.API_URI1}`);
  }
}
