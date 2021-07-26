import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../telas/categorias/categoria.model';
import { Observable } from 'rxjs';
import { BaseUrls } from './base-urls';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {


  constructor(private http: HttpClient) { }

  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(BaseUrls.baseCategoria)
  }

  findById(id: string){
    return this.http.get<Categoria>(BaseUrls.baseCategoria +"/"+ id)
  }

  update(categoria: Categoria){
    let token = localStorage.getItem('token'); 
    if(token){
      token = token
    }else{
      token = ''
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    return this.http.put<Categoria>(BaseUrls.baseCategoria +"/"+ categoria.id, categoria, {headers: headers})
  }

  delete(id: number): Observable<Categoria> {

    let token = localStorage.getItem('token'); 
    if(token){
      token = token
    }else{
      token = ''
    }

    let headers = new HttpHeaders();
    
    headers = headers.set('Authorization', token);
    return this.http.delete<Categoria>(BaseUrls.baseCategoria +"/"+ id, {headers: headers})
  }

  save(categoria: Categoria): Observable<Categoria> {
    
    let token = localStorage.getItem('token'); 
    if(token){
      token = token
    }else{
      token = ''
    }

    let headers = new HttpHeaders();
    
    headers = headers.set('Authorization', token);
    console.log("entrei na classe de serviço")
    return this.http.post<Categoria>(BaseUrls.baseCategoria, categoria, {headers: headers})
  }
}
