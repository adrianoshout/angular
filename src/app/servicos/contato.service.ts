import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../telas/login/login.model';
import { BaseUrls } from './base-urls';
import { Contato } from '../telas/categorias/model';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  save(contato: Contato){
    return this.http.post<any>(BaseUrls.baseContato, contato)
  }
}
