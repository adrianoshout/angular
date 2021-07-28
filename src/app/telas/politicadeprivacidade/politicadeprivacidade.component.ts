import { Component, OnInit } from '@angular/core';
import { PoliticaService } from 'src/app/servicos/politica.service';
import { Politica } from '../categorias/model';

@Component({
  selector: 'app-politicadeprivacidade',
  templateUrl: './politicadeprivacidade.component.html',
  styleUrls: ['./politicadeprivacidade.component.css']
})
export class PoliticadeprivacidadeComponent implements OnInit {

  politica: Politica = {
    id: 0,
    description: ''
  }

  constructor(private politicaService: PoliticaService) { }

  ngOnInit(): void {
    this.politicaService.buscarPolitica().subscribe(res => {
      this.politica = res
    })
  }

}
