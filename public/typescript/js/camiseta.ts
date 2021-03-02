"use strict";
//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//decorador
function estampar(log:string){
 // do something
 return function (target: Function){
  // do something
  target.prototype.estampacion = function ():void{
   // do something
   console.log('Camiseta estampada con el logo de: '+log)
  };
 };
};

//clase (Molde del objeto)
// @estampar('Gucci gang')
class Camiseta implements CamisetaBase{

    //propiedades(caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio; 
    }

    public setColor(color:string){
        this.color = color;
    }

    public getColor() {
        return this.color
    }
}

//clase hija
class Sudadera extends Camiseta{
    public capucha:boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha
    }
}

var camisa = new Camiseta('azul', 'maga larga', 'nike', 'M', 2000);
camisa.setColor('verde');
// camisa.estampar()

var playera = new Sudadera('rojo', 'maga larga', 'nike', 'M', 2000);
playera.setColor('gris');
playera.setCapucha(true);


console.log(playera)



// camisa.color = 'Rojo';
// camisa.marca = 'nike';
// camisa.modelo = 'Mangas largas';
// camisa.precio = 200;
// camisa.talla = 'M'

// console.log(camisa)