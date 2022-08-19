var $hora = $('#hora_real');

setInterval(function () {

    $hora.html((new Date).toLocaleString().substr(11, 8));

}, 1000);