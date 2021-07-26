import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './telas/login/login.component';
import { HomeComponent } from './telas/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosComponent } from './telas/produtos/produtos.component';
import { FormsModule } from '@angular/forms';
import { CategoriasComponent } from './telas/categorias/categorias.component';
import { MatCardModule } from '@angular/material/card';
import { NovacategoriaComponent } from './telas/novacategoria/novacategoria.component';
import { SairComponent } from './telas/sair/sair.component';
import { EditarcategoriaComponent } from './telas/editarcategoria/editarcategoria.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProdutosComponent,
    CategoriasComponent,
    NovacategoriaComponent,
    SairComponent,
    EditarcategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
