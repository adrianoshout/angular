import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from 'src/app/servicos/contato.service';
import { Contato } from '../categorias/model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService,
    private router: Router) { }

  contato: Contato = {
    email: '',
    message: '',
    name: ''
  }

  ngOnInit(): void {
  }

  save():void {
    this.contatoService.save(this.contato).subscribe(contato => {
      console.log(this.contato)
      alert("Mensagem enviada com sucesso!")
      this.router.navigate(['']);
    }, err => {
      console.log(this.contato)
      alert("Não foi possível enviar a mensagem")
    })
  }

}
