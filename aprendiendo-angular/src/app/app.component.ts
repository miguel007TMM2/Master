import { Component } from '@angular/core';
import {Configuracion} from './models/confuracion'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title:string;
  public config;
  public mostrar_videojuego: boolean = true;

  constructor(){
    this.config = Configuracion
    this.title = ''

  }
  
  ocultarVideojuegos(value:boolean){
    this.mostrar_videojuego = value;
  }
  
}
