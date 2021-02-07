$(document).ready(function () {  
    //move element  on page
    $('.element').draggable()  

    //resize element
    $('.element').resizable() 

    //Select and organize element
    // $('.lista').selectable() 
    $('.lista').sortable({
        update:function (e, ui) { 
            console.log('The list has changed')
        }
    })
    //drop
    $('#element-moved').draggable()
    $('#area').droppable({
        drop: function () { 
            console.log('You have moved something to the element')
         }
    })
    //effects
    $('#show').click(function () { 
        $('.effects-box').toggle('shake', 'slow');
    });
    //tooltip
    $(document).tooltip();

    //dialog
    $('#throw-popup').click(function () { 
        $('#popup').dialog();
     })
    //Datepicker
    $('#calender').datepicker();

    //tabs
    $('#page-tabs').tabs();
})