import { Component, OnInit } from '@angular/core';
import { TermosService } from 'src/app/servicos/termos.service';
import { TermosDeUso } from '../categorias/model';

@Component({
  selector: 'app-termosdeuso',
  templateUrl: './termosdeuso.component.html',
  styleUrls: ['./termosdeuso.component.css']
})
export class TermosdeusoComponent implements OnInit {

  termos: TermosDeUso = {
    id: 0,
    description: ''
  }

  constructor(private termosService: TermosService) { }

  ngOnInit(): void {
      this.termosService.termosDeUso().subscribe(rs => {
        this.termos = rs;
        console.log(rs)
      });
  }

}
