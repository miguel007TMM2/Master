$(document).ready(function () {
    // alert('hola')
    
    reloadLinks();

    $('#add_button').removeAttr('disabled').click(function () { 

        //append el ultimo elemento de la lista 
        //prepend el primer elemento de la lista 
        //before antes de la lista
        //after despuesd de la lista 
        //html sustituye todos los elementos
        
        $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>')
        reloadLinks();
        $('#add_link').val('')
    });

    function reloadLinks() { 

        $('a').each(function (indexInArray) {
            var that = $(this);
            var enlace = that.attr('href')
            that.text(enlace)
            that.attr('target', 'blank')
            // that.removeAttr('target');
    
        });
    }
});