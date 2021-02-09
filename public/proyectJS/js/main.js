$(document).ready(function(){
    //Slider
    if(window.location.href.indexOf('index') > -1){
      $(".bxslider").bxSlider({
        mode: "fade",
        captions: false,
        slideWidth: 1200,
        responsive: true,
      });

      //Posts
      var data_publication ='Published the day ' + moment().format('Do') + ' of the month ' + moment().format('MMMM')+ ' of the year '+ moment().format('YYYY');;;
      const posts = [
        {
          title: "Prueba de titulo 1",
          date: data_publication,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi illum, 
        explicabo sequi praesentium voluptatum maiores pariatur consectetur in ab nulla ut ex, a
        liquid voluptates ipsa optio blanditiis ratione nihil enim?`,
        },
        {
          title: "Prueba de titulo 2",
          date: data_publication,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi illum, 
        explicabo sequi praesentium voluptatum maiores pariatur consectetur in ab nulla ut ex, a
        liquid voluptates ipsa optio blanditiis ratione nihil enim?`,
        },
        {
          title: "Prueba de titulo 3",
          date: data_publication,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi illum, 
        explicabo sequi praesentium voluptatum maiores pariatur consectetur in ab nulla ut ex, a
        liquid voluptates ipsa optio blanditiis ratione nihil enim?`,
        },
        {
          title: "Prueba de titulo 4",
          date: data_publication,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi illum, 
        explicabo sequi praesentium voluptatum maiores pariatur consectetur in ab nulla ut ex, a
        liquid voluptates ipsa optio blanditiis ratione nihil enim?`,
        },
        {
          title: "Prueba de titulo 5",
          date: data_publication,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi illum, 
        explicabo sequi praesentium voluptatum maiores pariatur consectetur in ab nulla ut ex, a
        liquid voluptates ipsa optio blanditiis ratione nihil enim?`,
        },
      ];

      posts.forEach((element, index) => {
        var post = `
        <article class="post">
            <h2>${element.title}</h2>
            <span class="date">${element.date}</span>
            <p>
                ${element.content}
            </p>    
            <a href="#" class="button-more">Leer mas</a>
        </article>
        `;
        $("#posts").append(post);
      });
    }

    //selector theme
    var theme = $('#theme')
    $('#togreen').click(function () { 
        theme.attr('href', 'css/green.css');
    })
    $('#tored').click(function () { 
        theme.attr('href', 'css/red.css');
    })
    $('#toblue').click(function () { 
        theme.attr('href', 'css/blue.css');
    })
    //Scroll hacia arriba
    $('.up').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 500)
        return false
    })

    //login fake
    $('#login form').submit(function (e) { 
        e.preventDefault();
        let form_name = $('#form_name').val();
        let form_email = $('#form_email').val();
        let form_password = $('#form_password').val();

        localStorage.setItem('form_name', form_name);
        localStorage.setItem('form_email', form_email)
        localStorage.setItem('form_password', form_password)

        location.reload();
    });

    var form_name = localStorage.getItem('form_name')
    if(form_name != null && form_name != 'undefined'){
        var about_parrafo = $('#about p')

        about_parrafo.html('<br><strong>Bienvenido, '+ form_name+'.</strong>')
        about_parrafo.append('<a href="#" id="logout" >Cerrar session</a>')

        $('#login').hide();
        
        $('#logout').click(function () { 
            localStorage.clear();
            location.reload();
         })
    }
    if(window.location.href.indexOf('about') > -1){
        $('#aco').accordion();
    }
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function () { 
            var reloj = moment().format('hh:mm:ss a');
            $('#reloj').html(reloj);
        }, 1000);
        
    }
    //validation
    if(window.location.href.indexOf('contact') > -1){
      $('#calender').datepicker();
      $.validate({
        lang: 'es',
        errorMessagePosition:'top',
        scrollToTopOnError: true

      })
    }
}); 
