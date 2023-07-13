
let jugador = 0;
let computadora = 0;
let ronda= 0;

const opciones = ["piedra", "papel", "tijera"];

function juegaLaComputadora() {
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function jugarRonda(eleccionJugador, eleccionComputadora) {
    if (eleccionJugador === eleccionComputadora ) {
        return 'empate';
    }
    if ((eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionJugador === "tijera" && eleccionComputadora === "papel") ||
        (eleccionJugador === "papel" && eleccionComputadora === "piedra") ){
            return 'jugador';
    }
    if ((eleccionComputadora === "piedra" && eleccionJugador === "tijera") ||
        (eleccionComputadora === "tijera" && eleccionJugador === "papel") ||
        (eleccionComputadora === "papel" && eleccionJugador === "piedra") ){
        return 'computadora';
    }
}

function terminarJuego (ganador) {
    console.log("Resultado: ", ganador);
    jugador = 0;
    computadora = 0;
    ronda = 0;
}

function estadoDeJuego (){
    chequearGanadorJuego();
    if (ronda >= 5) {
        if ((jugador !== 3) && (computadora !== 3)) {
            if (jugador === computadora) {
                imprimirGanador('Empate');
                terminarJuego('Empate');
            }
            if (jugador > computadora) {
                imprimirGanador('Gano Jugador');
                terminarJuego('Gano Jugador');
            } else {
                terminarJuego('Gano Computadora');
                terminarJuego('Gano Computadora');
            }
        }
        jugador = 0;
        computadora = 0;
        ronda = 0;
    }
    
}


function chequearGanadorJuego (){
    console.log("Puntuación de Computadora: ", computadora);
    console.log("Puntuación de Jugador: ", jugador);
    if (jugador === 3) {
        console.log("Gano: Jugador");
        imprimirGanador('Gano Jugador');
        terminarJuego('Gano Jugador');
        return 'jugador';
        
    }
    if (computadora === 3) {
        console.log("Gano: Computadora");
        terminarJuego('Gano Computadora');
        terminarJuego('Gano Computadora');
        return 'computadora';
    }
}


function jugar(opcionJugador) {
    let a;
    ronda++;
    const opcionComputadora = juegaLaComputadora();
    a = jugarRonda(opcionJugador,opcionComputadora);
    
    if ( a === 'jugador') {
        jugador++;
    }
    if ( a ==='computadora'){
        computadora++;
    }
    imprimir(ronda,opcionJugador,opcionComputadora,a);
    estadoDeJuego();
  
    if (jugador === computadora) {
        return 'empate';
    }
}

function imprimir(ronda,jug,compu,gano){
    jug= jug[0].toUpperCase() + jug.substring(1);
    compu = compu[0].toUpperCase() + compu.substring(1);
    gano = gano[0].toUpperCase() + gano.substring(1);
    var juego = document.getElementById("juego");
    juego.innerHTML = `<p> Ronda numero: ${ronda} </p> <br> 
                        <p> Computadora: ${compu}. Puntuación: ${computadora} </p> <br> 
                        <p> Jugador: ${jug}. Puntuación: ${jugador} </p> <br> 
                        <p> Gano: ${gano} </p>` ;
}


function imprimirGanador(ganador){
    var res = document.getElementById("resultado");
    res.innerHTML = ` <p> Resultado: ${ganador} </p>` ;
}


const botones = document.querySelectorAll('button');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    console.log(boton.id);
    jugar(boton.id);
  });
});
