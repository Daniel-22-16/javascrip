// Obtener la fecha y hora actual
var today = new Date();
var now = today.toLocaleDateString('es-PE') 

//-------------------------------

var today = new Data();
var options = {weekday: 'long',year:'numeric', month:'long'}
options.timeZone = 'UTC';
optiones.timeZoneName ='short';
var now = today.toLocaleTimeString('es-PE', options)
console.log(now)