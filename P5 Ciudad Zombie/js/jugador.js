/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}

Jugador.mover = function(nuevoX,nuevoY){
this.x = nuevoX;
this.y = nuevoY;
};


Jugador.perderVidas = function perderVidas(){
  this.vidas = this.vidas-1;
  console.log(this.vidas);

};
