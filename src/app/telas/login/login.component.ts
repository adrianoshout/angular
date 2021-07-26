import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicos/login.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string = '';

  login: Login = {
    email: '',
    senha: ''
  }

  constructor(
    private router: Router, 
    private loginService: LoginService
   ) { }

  ngOnInit(): void {
  }

  logar(){
    this.loginService.login(this.login).subscribe(
    login => {
        var token = login.headers.get("Authorization")
        if(token){
          localStorage.setItem("token", token)
        }
        console.log(login.headers.get("Authorization"));
        this.router.navigate(['home']);
    },
    response => {
     alert("Email e/ou senha inválidos!")
    }
    
  )}
}
