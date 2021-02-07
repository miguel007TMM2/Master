$(document).ready(function () {
    //load
    // $('#datos').load("url", "data", function (response, status, request) {
    //     this; // dom element
        
    // });
    $.get('https://reqres.in/api/users?page=2', {page:3},function (response) { 
        response.data.forEach((element, index)=> {
            $('#datos').append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
     })


    $('#form').submit(function (e) { 
        const user = {
            "nombre": $('input[name="name"]').val(),
            "job":$('input[name="job"]').val()
            
        }

        // $.post($(this).attr('accion'), user, function (response) { 
        //     console.log(response)
        // }).done(function () { 
        //     alert('adding user correctly')
        // })
        
        $.ajax({
            type: "POST",
            url: $(this).atrr('accion'),
            data: user,
            beforeSend: function () { 
                console.log('Sending user...')
            },
            dataType: "text",
            success: function (response) {
                console.log(response)
            },
            errer: function () { 
                console.log('A ocurrido un error')
            },
            timeout:2000
        });
        
    })
});