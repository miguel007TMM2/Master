var bisicleta={
    color:'red',
    model: 'bmx',
    frenos:'disco',
    velocidad_max: '60km',
    cambia_color: function (change_color) { 
        this.color = change_color;
        console.log(this)
    }
}

bisicleta.cambia_color('Azul')