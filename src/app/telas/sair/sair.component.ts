import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css']
})
export class SairComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    alert("Deseja realmente sair!")
    localStorage.removeItem('token')
    localStorage.clear
    this.router.navigate([''])
  }

}
