import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ZapatosComponent} from './zapatos/zapatos.component' 
import{ VideojuegoComponent} from './videojuego/videojuego.component'
import { CursosComponent } from './cursos/cursos.component'
import {HomeComponent} from './home/home.component'
import { ExternoComponent } from './externo/externo.component'
import {ContactoComponent} from './contacto/contacto.component'


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'zapatos', component: ZapatosComponent},
  {path:'videojuegos', component: VideojuegoComponent},
  {path:'cursos', component: CursosComponent},
  {path:'cursos/:nombre/:seguidores', component: CursosComponent},
  {path:'externo', component:ExternoComponent},
  {path:'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

