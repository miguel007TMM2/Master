$(document).ready(function () {
    const caja = $('#caja')

    $('#mostrar').hide();

    $("#mostrar").click(function () { 
        $(this).hide();
        $('#ocultar').show();
            //fadeto
        caja.slideDown('slow');
    });

    $('#ocultar').click(function () { 
        $(this).hide();
        $('#mostrar').show();
            //fadeto
        caja.slideUp('slow', function () { console.log('carter oculto') });
    });

    $('#todoenuno').click(function () { 
            //fadeToggle
            //slideToggle
        caja.toggle('fast')
     })

     $('#animar').click(function () { 
         caja.animate({
                        marginLeft: '500px',
                        fontSize: '40px',
                        height: '110px'
                        }, 'slow')
            .animate({
                
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')

            .animate({
    
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            
            .animate({
                
                borderRadius: '100px',
                marginTop: '0px'
            }, 'slow')
      })
});