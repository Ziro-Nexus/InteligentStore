import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SigUp } from '../Models/sig.modesl';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const userUrl = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class SigService {

  constructor( private http: HttpClient) { }

  addUser(user: SigUp){
    return this.http.post(userUrl, user);
  }

}
