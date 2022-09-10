
import { LoginComponent } from './views/login/login.component';
import { ContatoComponent } from './views/contato/contato.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent} from 'src/app/componentes/header/header.component'
import { JogosComponent } from './views/jogos/jogos.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/login/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jogos',
    component: JogosComponent
  }
,
 
  {   
   path:'contato',
    component: ContatoComponent
  },

  {

    path: 'login',
    component: LoginComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
