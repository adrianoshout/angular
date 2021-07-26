import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/servicos/categorias.service';
import { Categoria } from '../categorias/categoria.model';

@Component({
  selector: 'app-novacategoria',
  templateUrl: './novacategoria.component.html',
  styleUrls: ['./novacategoria.component.css']
})
export class NovacategoriaComponent implements OnInit {

  constructor(
    private categoriaService: CategoriasService,
    private router: Router) { }

  categoria: Categoria = {
    id: 0,
    nome: ''
  }

  ngOnInit(): void {
  }

  save():void {
    this.categoriaService.save(this.categoria).subscribe(categorias => {
      console.log(this.categoria)
      alert("cadastro realizado com sucesso!")
      this.router.navigate(['home/categorias']);
    }, err => {
      console.log(this.categoria)
      alert("Não foi possível cadastrar a categoria")
    })
  }

}
