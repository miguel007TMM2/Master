window.addEventListener('load', function(){
    console.log('Dom cargado');
    
    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');

    formulario.addEventListener('submit',function() {
        console.log('Evento submit capturado');

        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = document.querySelector('#edad').value;

        box_dashed.style.display = 'block';
        
        // var p_nombre = document.querySelector('#p_nombre span');
        // var p_apellido = document.querySelector('#p_apellido span');
        // var p_edad = document.querySelector('#p_edad span');

        // p_nombre.innerHTML = nombre;
        // p_apellido.innerHTML = apellido;
        // p_edad.innerHTML = edad

        var datos_usuario = [nombre, apellido, edad];
        var datos = ['Nombre : ', 'Apellido : ', 'Edad : '];
        var i;
        var indice;

        for(indice in datos_usuario){
            if(datos_usuario[indice] == ''){
                box_dashed.style.display = 'none';
                alert('Una de las casillas esta vaicia');
                break
            }else if (datos_usuario[indice] != '' && indice == 2 ){
                for(i in datos){
                    var parrafo = document.createElement('p');
                    parrafo.append(datos[i], datos_usuario[i]);
                    box_dashed.append(parrafo)
                }
            }
        }
    });
})