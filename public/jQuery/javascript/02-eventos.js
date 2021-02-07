        $(document).ready(function () {
            var caja = $('#caja')
            var datos = $('#datos')

            // caja.mouseover(function () { 
            //     $(this).css('background', 'red') 
            //     $(this).css('color', 'white') 
            // });
            // caja.mouseout(function () { 
            //     $(this).css('background', 'yellow')
            //     $(this).css('color', 'black') 
            // });
            
            function cambia_rojo() { 
                $(this).css('background', 'red') 
                        .css('color', 'white') 
            }
            function cambia_amarillo() { 
                $(this).css('background', 'yellow')
                        .css('color', 'black') 
            }
            caja.hover(cambia_rojo, cambia_amarillo);

            caja.click(function () { 

                $(this).css('background', 'blue') 
                        .css('color', 'white') 
            });

            caja.dblclick(function () { 

                $(this).css('background', 'pink') 
                        .css('color', 'red') 
            });
            var nombre = $('#nombre')
            
            nombre.focus(function () { 
                $(this).css("border", "2px solid pink")
             });

            nombre.blur(function () { 
                $(this).css("border", "1px solid pink")
                datos.text($(this).val()).show()
             });

             //mouse move y mouse up

             datos.mousedown(function () { 
                 $(this).css("border-color", "gray")
             });

             datos.mouseup(function () { 
                $(this).css("border-color", "black")
            });

            // Mousemove

            $(document).mousemove(function () { 
                // console.log(event.clientX, 'En X')
                // console.log(event.clientY, 'En Y')
                $('body').css('cursor', 'none')
                $('#sigueme').css('left', event.clientX)
                                .css('top', event.clientY)
             })

         })