window.addEventListener('load',()=>{
    var boton = document.querySelector('button');

    function changeColor() {
    var bg = boton.style.background;
    if (bg == 'green') {

        boton.style.background = 'red'   

    }else{
        boton.style.background = 'green'   
    }
    return true
    }

    //click
    boton.addEventListener('click', ()=>{
        changeColor();
    });

    //mouseover
    boton.addEventListener('mouseover', ()=>{
        boton.style.background = '#ccc'
    });

    //mouseover
    boton.addEventListener('mouseout', ()=>{
        boton.style.background = 'black'
    });

    var input = document.querySelector('#hr');

    //focus
    input.addEventListener('focus', function () {
        console.log('Estas dentro de un input');
    });

    //blur
    input.addEventListener('blur', function () {
        console.log('Estas fuera de un input');
    });

    //keydown
    input.addEventListener('keydown', function (event) {
        console.log('Pulsando esta tecla', String.fromCharCode(event.keyCode));
    });

    //keypress
    input.addEventListener('keypress', function (event) {
        console.log('tecla presionada', String.fromCharCode(event.keyCode));
    });

    //keydown
    input.addEventListener('keydown', function (event) {
        console.log('tecla soltada ', String.fromCharCode(event.keyCode));
    });
});

