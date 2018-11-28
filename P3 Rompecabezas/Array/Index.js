
var numeroMagico = function () {
    var CantIntentos = 0;
    var arregloDeIntentos = [];
    //Pienso el numero magico y lo recuerdo como numero magico.
    var numeroMagico = 10;
    //Decime el numero y lo recuerdo como numero Numero ingresado.
    var numeroIngresado = prompt("Ingresa un numero");
    CantIntentos = CantIntentos + 1; //cantIntentos++
    arregloDeIntentos.push(numeroIngresado);
    console.log(arregloDeIntentos);

    //Si Numero ingresado es igual al Numero Magico, entonces te digo "Lo adivinaste"
    if (numeroIngresado == numeroMagico) {
        alert("Adivinaste el numero " + arregloDeIntentos.length + "tus intentos fueron" + arregloDeIntentos);
        alert(CantIntentos);
        return;
    }

    //Esto se repite mientras (Numero Magio != Numero Ingresado)
    while (numeroMagico != numeroIngresado) {

        //Si Numero ingresado es menor al numero magico entonces te digo "Tu numero es menor al Numero Magico"
        if (numeroIngresado < numeroMagico) {
            alert("Tu numero es menor al magico")

        }
        //Si numero ingresado es mayor al numero magico, entnonces te digo "Tu numero es mayor al numero magico"
        if (numeroIngresado > numeroMagico) {
            alert("Tu numeroes mayor al magico")
        }
        //Si (Numero Magio != Numero Ingresado) Decime un numero y lo recuerdo.
        if (numeroIngresado != numeroMagico) {
            numeroIngresado = prompt("Ingresa un numero");
            arregloDeIntentos.push(numeroIngresado);
            console.log(arregloDeIntentos);
            CantIntentos = CantIntentos + 1;


        }
        //Si Numero ingresado es igual al Numero Magico, entonces te digo "Lo adivinaste"
        if (numeroIngresado == numeroMagico) {
            alert("Adivinaste el numero " + arregloDeIntentos.length + "tus intentos fueron" + arregloDeIntentos);
            alert(CantIntentos);

        }


    }/// Fin de la repeticion.
    alert(arregloDeIntentos.length)

}