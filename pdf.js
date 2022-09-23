// function mostrarHora (){
//     var espacio = document.getElementById("reloj");
    
//     let horaactual = new Date()
 
//   var segundo = horaactual.getSeconds();
//   var minutis= horaactual.getMinutes();
//  var horas=horaactual.getHours();
//   var horafinal = horas + " " + minutis+ " " + segundo;
 
//   espacio.innerHTML = horafinal;
 
//   setTimeout(mostrarHora, 1000)
//  }
//  $(document).ready( function () {
//     $('#myTable').DataTable();
// } );

function cita(){
  var nomb = document.getElementById("Nombre").value
  var apelli = document.getElementById("apellido").value
  var cc = document.getElementById("cc").value
  var razon = document.getElementById("razon").value
  var fecha1 = document.getElementById("fecha-entrada").value
  var fecha2 = document.getElementById("fecha-salida").value
  var si = document.getElementById("si")
  let fecha1nw = new Date(fecha1);
  let fecha2nw = new Date(fecha2);
  var valorTotal = 0
  let resta = 0

  if (fecha1nw > fecha2nw) {
    alert("La fecha de inicio debe ser menor que la fecha de fin");
} else {
    let resta = fecha2nw.getTime() - fecha1nw.getTime();
    let dias = 1 + Math.floor(resta / (1000 * 60 * 60 * 24));

    var valorTotal = dias * 75000;
    if (si.checked) {
        valorTotal = valorTotal - (valorTotal * (35 / 100));
        radioChecked = "si";
    }else{
        radioChecked = "no";
    }
}

  

  var documentPDF = new jsPDF();
    documentPDF.setFontSize(20);
    documentPDF.text(50,20, 'recibo de hosspitalizacion');
    documentPDF.setFontSize(12);
    documentPDF.text(20,30, 'fecha:' + new Date());
    documentPDF.setFontSize(10);
    documentPDF.text(20,50, 'nombre:' + nomb );
    documentPDF.text(20,60, 'apellido:' + apelli );
    documentPDF.text(20,70, 'Documento de I.D.' + cc );
    documentPDF.text(20,80, 'hospitalizado por:' + razon );
    documentPDF.text(20,90, 'valor total:' + valorTotal );
    documentPDF.save('archivo.PDF');
}