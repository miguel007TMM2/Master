"use strict"

//Fetch y peticiones a servidores/apis rest

window.addEventListener('load', function() {
    
    var id = document.querySelector('#usuarios');

    function getUsuarios() {
        return fetch('https://jsonplaceholder.typicode.com/users')
    } 

    function getInfo() {
        
        var profesor = {
            nombre: 'victor',
            apellido : 'Roblez',
            url: 'https://victorroblesweb.es'
        }
        return new Promise((resolve, reject)=>{
            var profesor_string = JSON.stringify(profesor);
            
            if(typeof profesor_string != 'string') return reject('error')
            return resolve(profesor_string)
        })
    }

    getUsuarios()
        .then(data => data.json())
        .then(users =>{
            listadoUsuarios(users);

            return getInfo();
        })
        .then(data =>{
            console.log(data);
        })
        .catch(error =>{
            console.log(error);
            alert('Error en las peticiones');
        });

    function listadoUsuarios(usuarios) {

        usuarios.map((user, i)=>{
            let nombre = document.createElement('h2');
            nombre.innerHTML = i + 1 + " - "+ user.name
            id.appendChild(nombre);
            document.querySelector('.loading').style.display = 'none'
        })
    }
});