
//Declaración de variables
var nombreUsuario = "Alan Lima";
var saldoCuenta = 3456;
var limiteExtraccion = "3000";
var agua = ["Agua", 350];
var telefono = ["Telefono", 425];
var luz = ["Luz", 210];
var internet = ["Internet", 570];
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoDeSeguridad = 8520;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}
// Funciones que van servir en las opciones del Home Banking

function montoValido(montoValidar) {
    if (isNaN(montoValidar) || montoValidar <= 0) {
        alert("Ingresar valores numericos, positivo que sean mayor a cero");
        return false;
    }
    return true;
}

function quitarDinero(montoQuitar) {
    if (montoQuitar > saldoCuenta) {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
    }
    else {
        resultado = saldoCuenta - montoQuitar;
        alert("Usted retiro " + montoQuitar + "\nUsted tenia " + saldoCuenta + "\nUsted tiene " + resultado);
        saldoCuenta = resultado;
    }
}
function agregarDinero(montoAgregar) {

    resultado = saldoCuenta + montoAgregar;
    alert("Usted deposito " + montoAgregar + "\nUsted tenia " + saldoCuenta + "\nUsted tiene " + resultado);
    saldoCuenta = resultado;
}
function servicioaPagar(servicio) {
    var saldoAnterior = saldoCuenta;
    var nombreServicio = servicio[0];
    var codigoServicio = servicio[1];
    if (codigoServicio <= saldoCuenta) {
        saldoActual = saldoCuenta - codigoServicio;
        alert("Has pagado el servicio de " + nombreServicio + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + codigoServicio + "\nSaldo actual: " + saldoActual);
        saldoCuenta = saldoActual;
        actualizarSaldoEnPantalla();
    }
    else {
        alert("No tienes saldo suficiente para realizar esta operacion");
    }

}

//Funciones que tenes que completar


function cambiarLimiteDeExtraccion() {

    var nuevoLimite = parseInt(prompt("Nuevo limite de extraccion"));
    if (montoValido(nuevoLimite)) {
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert("Tu nuevo limite de extraccion es " + limiteExtraccion);
    }
}



function extraerDinero() {

    var montoaExtraer = parseInt(prompt("¿Cuanto dinero quiere extraer?"));
    if (montoValido(montoaExtraer)) {

        if (montoaExtraer > limiteExtraccion) {
            alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion.");
            return;
        }

        if (montoaExtraer % 100 != 0) {
            alert("Solo puede extraer billetes de 100");
            return;
        }
        quitarDinero(montoaExtraer);
        actualizarSaldoEnPantalla();
    }
}



function depositarDinero() {

    var dineroDepositado = parseInt(prompt("¿Cuanto dinero quiere depositar?"));
    if (montoValido(dineroDepositado)) {
        agregarDinero(dineroDepositado);
        actualizarSaldoEnPantalla();
    }
}


function pagarServicio() {

    var servicioElegido = parseInt(prompt("Ingrese el numero que corresponda con el servicio que queres pagar \n1- Agua \n2- Luz \n3- Internet \n4- Telefono"));

    if (montoValido(servicioElegido)) {

        switch (servicioElegido) {
            case 1:
                servicioaPagar(agua);
                break;
            case 2:
                servicioaPagar(luz);
                break;
            case 3:
                servicioaPagar(internet);
                break;
            case 4:
                servicioaPagar(telefono);
                break;

            default:
                alert("Ingresaste una opcion no valida")
                break;
        }
    }
}

function transferirDinero() {

    var montoaTransferir = parseInt(prompt("Ingrese el monto que desea transferir."));

    if (montoValido(montoaTransferir)) {
        if (montoaTransferir >= saldoCuenta) {
            alert("Usted no tiene saldo suficiente para transferir el monto deseado.");
            return;
        }
        var nroDeCuenta = parseInt(prompt("Ingrese el numero de cuenta al que desea transferir el dinero."));
               
        if ((nroDeCuenta != cuentaAmiga1) && (nroDeCuenta != cuentaAmiga2)) {
            alert("Solo puede transferirse dinero a una cuenta amiga.");
            return;
        }
        alert("Se han transferido " + montoaTransferir + "\nCuenta destino: " + nroDeCuenta);
        saldoCuenta = saldoCuenta - montoaTransferir;
        actualizarSaldoEnPantalla();
    }
}



function iniciarSesion() {

    var codigoIngresado = parseInt(prompt("Ingrese el codigo de su cuenta."));

    if (codigoDeSeguridad === codigoIngresado) {
        alert("Bienvenido Alan Lima ya puedes comenzar a realizar operaciones");
        return;
    }
    if (codigoDeSeguridad != codigoIngresado) {
        alert("Codigo incorrecto. Tu dinero ha sido retirado por cuestiones de seguridad.")
        saldoCuenta = saldoCuenta - saldoCuenta
        actualizarSaldoEnPantalla();
    }
}




//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}