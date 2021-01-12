        $(document).ready(function () {
            var caja = $('#caja')

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
         })