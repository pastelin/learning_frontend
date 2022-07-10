const miModulo = (() => {
	'use strict'
	let deck = [];
	const tipos = ['C', 'D', 'H', 'S'],
				especiales = ['A', 'J', 'Q', 'K'];

	let puntosJugadores = [];

	// Referencias del html
	const btnPedir = document.querySelector('#btnPedir'),
				btnDetener = document.querySelector('#btnDetener'),
				btnNuevo = document.querySelector('#btnNuevo');

	const puntosHtml = document.querySelectorAll('small'),
			 	divCartasJugadores = document.querySelectorAll('.divCartas');


	const inicializarJuego = ( numJugadores = 2 ) => {
		deck = crearDeck();

		puntosJugadores = [];
		for( let i = 0; i < numJugadores; i++) {
			puntosJugadores.push(0);
		}

		puntosHtml.forEach( (element) => element.innerText = 0 );
		divCartasJugadores.forEach( (element) => element.innerHTML = '' );

		btnPedir.disabled = false;
		btnDetener.disabled = false;
	}

	// Esta funcion crea un nuevo deck
	const crearDeck = () => {
		deck = [];
		for (let i = 2; i <= 10; i++) {
			for (let tipo of tipos) {
				deck.push(i + tipo);
			}
		}

		for (let tipo of tipos) {
			for (let esp of especiales) {
				deck.push(esp + tipo);
			}
		}
		return _.shuffle(deck);
	};

	// Esta funcion me permite tomar una carta
	const pedirCarta = () => {
		if (deck.length === 0) {
			throw 'No hay cartas en el deck';
		}
		return deck.pop();
	};

	const valorCarta = (carta) => {
		const valor = carta.substring(0, carta.length - 1);
		return ( isNaN(valor) ) ? 
						( valor === 'A' ) ? 11 : 10 
						: valor * 1;
	};

	// Turno: 0 = primer jugador y el ultimo sera la computadora
	const acumularPuntos = ( carta, turno ) => {
		puntosJugadores[turno] += valorCarta(carta);
		puntosHtml[turno].innerText = puntosJugadores[turno];
		return puntosJugadores[turno];
	}

	const crearCarta = ( carta, turno ) => {
		const imgCarta = document.createElement('img');
		imgCarta.src = `assets/cartas/${carta}.png`;
		imgCarta.classList.add('carta');
		divCartasJugadores[turno].append(imgCarta);
	}

	// Turno de la computadora
	const turnoComputadora = ( puntosMinimos ) => {
		let puntosComputadora = 0;

		do {
				const carta = pedirCarta();
				puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
				crearCarta(carta, puntosJugadores.length - 1);
		} while( (puntosComputadora < puntosMinimos) &&  (puntosMinimos <= 21) );

		determinarGanador();
	}

	const determinarGanador = () => {
		const [puntosMinimos, puntosComputadora] = puntosJugadores;
		
		setTimeout(() => {
			if (puntosMinimos === puntosComputadora) {
				alert('Nadie Gana :(');
			} else if(puntosMinimos > 21) {
				alert('Computadora gana');
			} else if(puntosComputadora > 21) {
				alert('Jugador Gana');
			} else {
				alert('Computadora Gana');
			}
		}, 100);
	}

	// Eventos
	btnPedir.addEventListener('click', () => {
		const carta = pedirCarta();
		const puntosJugador = acumularPuntos( carta, 0);
		crearCarta(carta, 0);

		if( puntosJugador > 21 ) {
			console.warn('Has perdido');
			btnPedir.disabled 	= true;	
			btnDetener.disabled = true;
			turnoComputadora(puntosJugador);
		} else if ( puntosJugador === 21 ) {
			console.warn('21, genial');
			btnPedir.disabled 	= true;
			btnDetener.disabled = true;
			turnoComputadora(puntosJugador);
		}
	});

	btnDetener.addEventListener('click', () => {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora( puntosJugadores[0] );
	});

	btnNuevo.addEventListener('click', () => {
		inicializarJuego();
	});

	return {
		nuevoJuego: inicializarJuego
	};
})();	