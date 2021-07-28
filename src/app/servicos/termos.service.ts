import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../telas/login/login.model';
import { BaseUrls } from './base-urls';
import { TermosDeUso } from '../telas/categorias/model';


@Injectable({
  providedIn: 'root'
})
export class TermosService {

  constructor(private http: HttpClient) { }

  termosDeUso(){
     return this.http.get<TermosDeUso>(BaseUrls.baseTermosDeUso)
  }
}
