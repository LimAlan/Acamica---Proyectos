function saludar(){
  
    var usuario = document.getElementById("NombreDeUsuario");
    var nombre = usuario.value;
      alert("Hola " + nombre);
}
var edad = document.getElementById("EdadUsuario");
var EdadUsuario = edad.value;
alert("Hola tu edad es " + EdadUsuario);

var resultado = document.getElementById("resultado");
var textoFinal = "";
textoFinal = "Hola " + nombre + " edad es " + edad; 
