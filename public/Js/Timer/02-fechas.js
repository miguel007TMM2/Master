
window.addEventListener('load', function () {

    var fecha = new Date();

    var fechas = {
        year: fecha.getFullYear(), 
        month: fecha.getMonth(),
        day: fecha.getDate(),
        hour: fecha.getHours()
    }
    var textHour = `
        El Año es: ${fechas.year}
        El Mes es: ${fechas.month}
        El Dia es: ${fechas.day}
        La Hora es: ${fechas.hora}
    `;

    console.log(textHour);

});
