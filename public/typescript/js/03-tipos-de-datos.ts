type letras_numeros = string | number

//string
let cadena: letras_numeros = 'Miguel';
cadena = 44;

//nummber
let numero:number= 12;

//boolean
let false_true: boolean = true;

//any
let cualquiera: any= 'Hola';

cualquiera= 12;

//array
var languajes: Array<string>=['PHP', 'JS']

let years:any[]=['doce',1,3,4];

//let vs var
var number1 = 10;
var number2 = 2

if(number1 == 10){
    let number2 = 12;
    var number1 = 15;

    console.log(number1, number2);
}
console.log(number1, number2);

console.log(cadena, numero, false_true, cualquiera, languajes, years)