/*
2C = TWO OF CLUBS (TREBOLES)
2D DIAMONDS
2H HEARTS
2S CORAZONES
*/


const miModulo = (() => {  //sintaxis del patron modulo. ubicada la fn en algun lugar de memoria inaccesible

    'use strict'

    


    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];


    //let puntosJugador = 0,
      //  puntosComputadora = 0;

    let puntosJugadores = [];

    //referencias del html

    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo= document.querySelector('#btnNuevo');




    const divCartasJugador = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');



    //esta funcion crea un nuevo deck
    const crearDeck = () => {

        deck = [];

        for(let i =2; i<=10; i++){

            for(let tipo of tipos){
                deck.push(i + tipo);
            }
            
        }

        for(let tipo of tipos){

            for(let esp of especiales){
                deck.push(esp + tipo);
            }
        }

        return _.shuffle(deck);


    }


    const inicializarJuego = (numJugadores = 2) => {
        crearDeck();

        puntosJugadores = [];
        for( let i=0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }


        btnPedir.disabled = false;
        btnDetener.disabled = false;
        
        puntosHTML.forEach(elem => elem.innerText = 0);

        divCartasJugador.forEach(elem => elem.innerHTML = '0');
        //puntosHTML[0].innerText = 0; ATAJO ARRIBA
        //puntosHTML[1].innerText = 0;


    }




    const pedirCarta = () => {

        if(deck.length == 0){
            throw ("No hay cartas en el deck");
        }

        return deck.pop();


    }



    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length -1);

        const puntos = (isNaN(valor)) ? 
                        ((valor == 'A') ? 11 : 10)
                        : valor*1;    

    return puntos;

    }

    //turno: 0 primer jugador. ultmo la compi
    const accumularPuntos = (turno, carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        
        puntosHTML[turno].innerHTML = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador[turno].append(imgCarta);

    }

    const determinarGnador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if(puntosComputadora == puntosMinimos){
                alert('Nadie gana');
            }else if(puntosMinimos > 21){
                alert('Has perdido');
            }else if(puntosComputadora > 21 ){
                alert('Felicidades, has ganado!!');
            }else{
                alert('Has perdido');
            }        
        }, 10);
    }


    //TURNO DE LA COMPUTADORA
    const turnoComputadora = (puntosMinimos) => {
        

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            accumularPuntos(puntosJugadores.length-1, carta)
            crearCarta(carta, puntosJugadores.length-1)



        }while (puntosComputadora < puntosMinimos && puntosMinimos < 21);

        determinarGnador();




    }





    // Eventos

    //btnPedir.addEventListener('click', function() {}) //fn callback (fn que se manda como argumento)

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();

        const puntosJugador = accumularPuntos(0, carta)

        crearCarta(carta, 0);

        //puntosJugador = puntosJugador + valorCarta(carta);
        //puntosHTML[0].innerHTML = puntosJugador;


        if(puntosJugador >21){
            console.warn('Has perdido');
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
            btnDetener.disabled = true;
            
        }else if (puntosJugador == 21){
            console.warn('21, geniooo');
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
            btnDetener.disabled = true;


        }

    })

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);

    })


    btnNuevo.addEventListener('click', () => {

        inicializarJuego();

    })

    return {
        nuevoJuego: inicializarJuego
    };

}) (); //sintaxis del patron modulo. ubicada la fn en algun lugar de memoria inaccesible












