import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../telas/login/login.model';
import { BaseUrls } from './base-urls';
import { Politica, TermosDeUso } from '../telas/categorias/model';


@Injectable({
  providedIn: 'root'
})
export class PoliticaService {

  constructor(private http: HttpClient) { }

  buscarPolitica(){
     return this.http.get<Politica>(BaseUrls.basePoliticaDePrivacidade)
  }
}
