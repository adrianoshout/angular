import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './acount/shared/auth.guard';
import { CategoriasComponent } from './telas/categorias/categorias.component';
import { EditarcategoriaComponent } from './telas/editarcategoria/editarcategoria.component';
import { HomeComponent } from './telas/home/home.component';
import { LoginComponent } from './telas/login/login.component';
import { NovacategoriaComponent } from './telas/novacategoria/novacategoria.component';
import { PoliticadeprivacidadeComponent } from './telas/politicadeprivacidade/politicadeprivacidade.component';
import { ProdutosComponent } from './telas/produtos/produtos.component';
import { SairComponent } from './telas/sair/sair.component';
import { TermosdeusoComponent } from './telas/termosdeuso/termosdeuso.component';

const routes: Routes = [
  {  path: '',  component: LoginComponent },
  {  path: 'login',  component: LoginComponent },
  {  path: 'termosdeuso',  component: TermosdeusoComponent },
  {  path: 'politicadeprivacidade',  component: PoliticadeprivacidadeComponent },
  {  path: 'home',  component: HomeComponent, children: [

    {  path: 'produtos',  component: ProdutosComponent },
    {  path: 'categorias',  component: CategoriasComponent },
    {  path: 'novacategoria',  component: NovacategoriaComponent },
    {  path: 'sair',  component: SairComponent },
    {  path: 'editarcategoria/:id',  component: EditarcategoriaComponent }
  ], canActivate: [AuthGuard]}, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
