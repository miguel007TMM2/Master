"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//decorador
function estampar(log) {
    // do something
    return function (target) {
        // do something
        target.prototype.estampacion = function () {
            // do something
            console.log('Camiseta estampada con el logo de: ' + log);
        };
    };
}
;
//clase (Molde del objeto)
// @estampar('Gucci gang')
var Camiseta = /** @class */ (function () {
    //Metodos (funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
//clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camisa = new Camiseta('azul', 'maga larga', 'nike', 'M', 2000);
camisa.setColor('verde');
// camisa.estampar()
var playera = new Sudadera('rojo', 'maga larga', 'nike', 'M', 2000);
playera.setColor('gris');
playera.setCapucha(true);
console.log(playera);
