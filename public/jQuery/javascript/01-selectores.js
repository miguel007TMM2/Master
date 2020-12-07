$(document).ready(function() {
    // console.log('Estamos listos');
    var rojo = $('#rojo').css('background', 'red')
                        .css('color', 'white');

    var amarillo = $('#amarillo').css('background', 'green')
                        .css('color', 'white');

    var verde = $('#verde').css('background', 'yellow')
                        .css('color', 'white');

    var zebra = $('.zebra');

    $('.sin_border').click(function() {
        console.log('click');
        $(this).addClass('zebra');
    });
   
    var parrafo = $('p').css('cursor', 'pointer');

    parrafo.click(function () {
        let This = $(this);
        if(!This.hasClass('big')){
            This.addClass('big');
        }else{
            This.removeClass('big');
        }
       
    });
    $('[title="google"]').css('background', '#ccc')
                        .css('color', 'white');
    $('[title="youtube"]').css('background', 'red').css('color', 'white');
    $('[title="facebok"]').css('background', 'blue').css('color', 'white');
    $('[title="Animeflv"]').css('background', 'yellow').css('color', 'white');

    // $('p, a').addClass('margin-superior');

    var busqueda = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="youtube"]');
    console.log(busqueda)
})