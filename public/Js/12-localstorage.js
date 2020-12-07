"use strict"

//LocalStorage

//Comprobacion del localStorage
function comprovations() {
    
    if(typeof(Storage) !== 'undefined'){
        console.log('LocalStorage disponible');
    }else{
        console.log('LocalStorage no disponible');
    }
}
comprovations();

//Guardar datos 
localStorage.setItem('Titulo', 'Curso de JS');
console.log(localStorage.getItem('Titulo'));

var peliculas = document.querySelector('#peliculas');

peliculas.innerHTML = localStorage.getItem('Titulo')

//Gurdar objetos
var usuario ={

    email : 'climaxfran@gmail.com',
    nombre : 'Miguel Rafael Mateo',
    web : 'Liberty.com'
}

localStorage.setItem('usuario', JSON.stringify(usuario));

//Recuperar objetos

var userjs = JSON.parse(localStorage.getItem('usuario'));

console.log(userjs);
document.querySelector('#datos').append(userjs.web+" - "+userjs.nombre);

//  
localStorage.clear();