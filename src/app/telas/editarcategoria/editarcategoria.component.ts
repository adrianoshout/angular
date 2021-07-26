import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/servicos/categorias.service';
import { Categoria } from '../categorias/categoria.model';

@Component({
  selector: 'app-editarcategoria',
  templateUrl: './editarcategoria.component.html',
  styleUrls: ['./editarcategoria.component.css']
})
export class EditarcategoriaComponent implements OnInit {

  constructor(
    private categoriaService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  categoria: Categoria = {id: 0, nome: ''}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.categoriaService.findById(id).subscribe(categoria => {
      this.categoria = categoria
    });
  }

  update(): void{
    this.categoriaService.update(this.categoria).subscribe(categoria => {
      this.categoria = categoria
      alert("Categoria atualizada com sucesso!")
      this.router.navigate(['home/categorias'])
    }, err => {
      alert("Não foi possível atualizar a categoria")
    })
  }

}
