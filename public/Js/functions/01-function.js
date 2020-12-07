function porconsola(n1, n2) {

    console.log('suma: ' + (n1 + n2))
    console.log('multi: ' + (n1 * n2))
    console.log('divi: ' + (n1 / n2))
    console.log('rest: ' + (n1 - n2))
    console.log('_____________________')
}

function porpantalla(n1, n2) {
    
    document.write('suma: ' + (n1 + n2) + '<br/>')
    document.write('multi: ' + (n1 * n2) + '<br/>')
    document.write('divi: ' + (n1 / n2) + '<br/>')
    document.write('rest: ' + (n1 - n2) + '<br/>')
    document.write('_____________________' + '<br/>')
}

function calculadora(n1, n2, mostrar = false) {
    if(mostrar == false){
        porconsola(n1, n2);
    }else{
        porpantalla(n1, n2);
    }     
}

for (let index = 0; index < 10; index++) {
    console.log(index)
    calculadora(index, 8, true);
}
 