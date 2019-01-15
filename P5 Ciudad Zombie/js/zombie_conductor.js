/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function (sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);

  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */

  /* Completar metodos para el movimiento y el ataque */
}
/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(ZombieCaminante.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;



/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.atacar = function (jugador) {
  jugador.perderVidas(jugador.vidas);
}

ZombieConductor.prototype.mover = function () {
  if (this.direccion === 'h') {
    this.x -= this.velocidad;
  } else {
    this.y -= this.velocidad;
    
  }
    if ( 
    (  (this.direccion === 'h') && ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) ) 
    ||
    ( (this.direccion === 'v') && ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY))  )
    ) {
    this.velocidad *= -1;
  }

}