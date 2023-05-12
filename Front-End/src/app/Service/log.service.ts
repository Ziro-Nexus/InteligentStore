import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SigUp } from '../Models/sig.modesl';

const userUrl = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class LogService {


  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any[]>(`${userUrl}`);
  }


}
