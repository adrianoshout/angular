import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../telas/login/login.model';
import { BaseUrls } from './base-urls';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login){
    return this.http.post<any>(BaseUrls.baseLogin, login, 
      {
        observe: 'response',
      });
  }
}
