import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector:'videojuego',
    templateUrl:'./videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public title : string;
    public listado : string;

    constructor(){

        this.title = 'Componente de videojuegos'
        this.listado = 'Listado de los juegos mas populares'

        // console.log('Se ha cargado el componente VideojuegoComponent')
    }
    ngOnInit():void{
        // console.log('OnInit ejecutado !!')
    }
    ngDoCheck():void{
        // console.log('DoCheck ejecutado !!')
    }
    ngOnDestroy(){
        // console.log('OnDestroy ejecutado !!')
    }
    CambiarTitulo(){
        this.title = 'Nuevo titilo de componente'
    }
}