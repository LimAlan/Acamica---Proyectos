/*
alert("Hola")
console.log("Hola desde consola");
*/


/* // Declaramos una variable
var nombre = "Alan";
var edad = 25;
var edad8 = 8;
var fumo = false;

console.log("Suma de numeros");
console.log(25 + 8);
console.log(edad + edad8);
console.log("Suma texto numero");
console.log(nombre + edad);
console.log(nombre + "tiene " + edad + " de edad") */



var etiqueta = document.getElementById("ValorContador") ;

function Saludo() {
    var nombre = prompt("Ingrese nombre")
    console.log(nombre);
    alert("Hola " + nombre);
}



function MostrarEdad(){
    var TuEdad = prompt("Ingrese edad");
    alert(TuEdad);
}

var contador = 0;


ActualizarContador();

function sumar(){
               
contador= contador + 1;
ActualizarContador();

}
function restar(){
contador = contador - 1;
ActualizarContador();

}
function multiplicar(){
contador= contador * 1;
ActualizarContador();

}

function ActualizarContador(){
    etiqueta.innerHTML = contador;
}

function Guardar(){
    NombredeUsuario = localStorage.setItem("dato", "lala");
}

function Leer(){
    alert(localStorage.getItem("dato"));
}














