function horaSistema()
{
var fecha = new Date();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var horaSistema = hora + ":" + minutos + ":" + segundos;
document.getElementById("mostrarReloj").innerHTML = horaSistema;
setTimeout("horaSistema()", 1000);

}
$(document).ready(function () {
    $('#example').DataTable();
});