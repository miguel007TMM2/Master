"use strict"
window.addEventListener('load', function () {
    
    var formulario = document.querySelector('#formmovies');

    formulario.addEventListener('submit', function() {

        var addmovies = document.querySelector('#addmovies').value;

        if(addmovies.length >= 1){
            localStorage.setItem(addmovies, addmovies);
        }
    });
    var ul = document.querySelector('#movieslist');
    for (var i in localStorage) {

        if (typeof localStorage[i] == 'string') {
            var li = document.createElement('li');
            li.append(localStorage[i]);
            ul.append(li);
        }
    }
    
    var formulariob = document.querySelector('#formDeleteMovies');

    formulariob.addEventListener('submit', function() {

        var deletemovies = document.querySelector('#deletemovies').value;

        if(deletemovies.length >= 1){
            localStorage.removeItem(deletemovies);
        }
    });

});
