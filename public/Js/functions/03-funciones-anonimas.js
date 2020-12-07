// var pelicula = function (nombre) {
//     return 'la pelicula es: '+nombre
// }
// console.log(pelicula('La sombra'))

function sumame(n1, n2, sumaYmuestra, sumarPordos) {
    var sumar = n1 + n2;

    sumaYmuestra(sumar);
    sumarPordos(sumar);
}

sumame(6, 10, data=> {
    console.log('la suma es: ',data);
}, 
data => {
    console.log('La suma por dos es:', (data*2));
});