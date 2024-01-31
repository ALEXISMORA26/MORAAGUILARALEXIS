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
