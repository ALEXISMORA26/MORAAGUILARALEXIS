function validar(e){

    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8){
        return true;
    }

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    
    return patron.test(codigo);
        
    
}


function interes(){
    var sueldo = parseInt(document.formulario.sueldo.value);
    console.log("sueldo: " + sueldo);
    var valor = parseInt(document.formulario.venta1.value) +parseInt(document.formulario.venta2.value) + parseInt(document.formulario.venta3.value);
    console.log("ventas: " + valor);
    var resultado = valor;
    var interes = resultado * .1;
    var total = interes + resultado + sueldo;

    document.formulario.sueldoI.value = "$"+total;
}

function borrarDatosEjercicio2(){
    document.formulario.sueldoI.value = "";
    document.formulario.sueldo.value = "";
    document.formulario.venta1.value = "";
    document.formulario.venta2.value = "";
    document.formulario.venta3.value = "";
}
//
function descuentosTienda(){
    var valor = parseInt(document.formulario.subtotal.value);
    console.log("subtotal: " + valor);
    var resultado = valor;
    var interes = resultado * .15;
    var total =  resultado - interes;

    document.formulario.sueldoI.value = "$"+total;
}

function borrarDatosEjercicio3(){
    document.formulario.sueldoI.value = "";
    document.formulario.subtotal.value = "";
}
// 
function descuentosCalficacion(){
    var valorCal = parseInt(document.formulario.cal1.value) + parseInt(document.formulario.cal2.value) + parseInt(document.formulario.cal3.value);
    console.log("calificaciones: " + valorCal);
    var valorExam = parseInt(document.formulario.calExamen.value);
    console.log("examen: " + valorExam);
    var valorTrabajo = parseInt(document.formulario.calTrabajo.value);
    console.log("trabajo: " + valorTrabajo);

    
    var promCal = valorCal/3 * .55;
    var promExam = valorExam * .30;
    var promTrabajo = valorTrabajo * .15;
    var total =  promCal + promExam + promTrabajo;

    document.formulario.sueldoI.value = total;
}

function borrarDatosEjercicio4(){
    document.formulario.cal1.value = "";
    document.formulario.cal2.value = "";
    document.formulario.cal3.value = "";
    document.formulario.calExamen.value = "";
    document.formulario.calTrabajo.value = "";
    document.formulario.sueldoI.value = "";
}
//

function alumnos(){
    var totalAlumnos = parseInt(document.formulario.mujeres.value) + parseInt(document.formulario.hombres.value);
    console.log("total alumnos" + totalAlumnos);
    var totalHombres = parseInt(document.formulario.hombres.value);
    console.log("total alumnos" + totalHombres);
    var totalMujeres = parseInt(document.formulario.mujeres.value);
    console.log("total alumnos" + totalMujeres);

    
    var promHombres = (totalHombres/totalAlumnos) * 100;
    var promMujeres = (totalMujeres/totalAlumnos) * 100;

    document.formulario.sueldoI.value = promHombres + "%";
    document.formulario.sueldoII.value = promMujeres + "%";
}

function borrarDatosEjercicio5(){
    document.formulario.mujeres.value = "";
    document.formulario.hombres.value = "";
    document.formulario.sueldoI.value = "";
    document.formulario.sueldoII.value = "";
}
