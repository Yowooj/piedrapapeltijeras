/*leemos las entradas de las opciones */
const piedraOpcion = document.getElementById("piedra");
const papelOpcion = document.getElementById("papel");
const tijeraOpcion = document.getElementById("tijera");


/*leemos la entrada del resultado */

const resultadoJuego = document.getElementById("resultado");

//iniciamos el juego
piedraOpcion.addEventListener("click", () =>{
    iniciarJuego('piedra');
});

papelOpcion.addEventListener("click", () =>{
    iniciarJuego('papel');
});

tijeraOpcion.addEventListener("click", () =>{
    iniciarJuego('tijera');
});

function iniciarJuego(opcion){
    //movimiento pc
    const movPC = movimientoPc();
    //movimiento usuario
    const movUsuario = opcion;
    //comparacion de movimiento
    const comp = compracion(movPC, movUsuario);
    //resultado
    if (comp ==1) {
        resultadoJuego.innerHTML = "Elegiste "+movUsuario + "<br> La IA eligio "+ movPC+ "<br> <span class='ganador'>Bien pa, le ganaste a la IA</span>";
    }
    if (comp ==2) {
        resultadoJuego.innerHTML = "Elegiste "+movUsuario + "<br> La IA eligio "+ movPC+ "<br> <span class='perdedor'>Te caes pa, perdiste";
    }
    if (comp ==3) {
        resultadoJuego.innerHTML = "Elegiste "+movUsuario + "<br> La IA eligio "+ movPC+ "<br> <span class='empate'>Ni mal Ni bien, empate</span>";
    }
}

function movimientoPc(){
    const opciones = ['piedra', 'papel', 'tijera'];
    const random = Math.floor(Math.random()*3);
    const mov = opciones[random];
    return (mov);
}

function compracion(pc, usuario){
    switch (usuario+pc){
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            return 1; //gana
        case 'tijerapiedra':
        case 'piedrapapel':
        case 'papeltijera':
            return 2; //pierde
        case 'papelpapel':
        case 'piedrapiedra':
        case 'tijeratijera':
            return 3; //empata
    }
}
