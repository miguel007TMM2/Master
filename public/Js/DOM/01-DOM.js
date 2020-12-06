'use strict'

//DOM - document object model

//conseguir elementos por ID concretos
var content = document.getElementById('c');


content.style.background = 'red';
content.style.padding = '20px'

function changeColor(color) {
    content.style.background = color
}
 changeColor('green');

// console.log(content);

//conseguir elementos por su etiqueta

var allDivs = document.getElementsByTagName('div');

var valor;

for(valor in allDivs){
    
    if(allDivs[valor].textContent == undefined){
        break
    }else{

        var parrafo = document.createElement('p');
        var texto = document.createTextNode(allDivs[valor].textContent);

        parrafo.appendChild(texto);
        document.querySelector('#KLK').appendChild(parrafo);
    }
}

//conseguir elementos por su clase

var divRojos = document.getElementsByClassName('rojo');
var divamarilos = document.getElementsByClassName('amarillo');

// console.log(divamarilos);

var div;
for (div in divRojos) {
    if (divRojos[div].className == 'rojo'){
        divRojos[div].style.background = 'red'
    }
}

// console.log(divRojos)


//Queryselector

var id = document.querySelector('#encabezado');

console.log(id);

var clase = document.querySelectorAll('.rojo');
console.log(clase)