import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/servicos/categorias.service';
import { Categoria } from './categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private router: Router, private categoriaService: CategoriasService) { }

  categorias: Categoria[] = []; 

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.categoriaService.findAll().subscribe(categorias => {
      this.categorias = categorias
      console.log(categorias)
    })
  }

  remover(id: number):void {
    confirm("Tem certeza que deseja remover a categoria?")
      this.categoriaService.delete(id).subscribe(categorias => {
      console.log("removido com sucesso")
      this.findAll();
    }, err => {
      alert("Não foi possível remover a categoria")
    })
  }

  editar(id:number){
      this.router.navigate(['home/editarcategoria/' + id])
  }

}
