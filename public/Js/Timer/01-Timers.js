'use strict'

window.addEventListener('load', function () {
    
    //Timers
    function interval() {

        var tiempo = setInterval(function () {

            // console.log('set intelval ejecutando');
    
            var h1 = document.querySelector('h1')
    
            if(h1.style.fontSize == '50px'){
                h1.style.fontSize = '20px'
            }else{
                h1.style.fontSize = '50px'
            }
        }, 3000)
    
        return tiempo
    }

    var tiempo = interval();

    var btn = document.querySelector('#stop');

    btn.addEventListener('click', function () {
        
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');

    start.addEventListener('click', function () {

       interval();

    });
    
});