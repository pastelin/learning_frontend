// guardar_localstorage();

// obtener_localstorage();

function obtener_localstorage() {
	if (localStorage.getItem('nombre')) {
		let nombre = localStorage.getItem('nombre');
		let persona = JSON.parse(localStorage.getItem('persona'));

		console.log({ nombre, persona });
	}
}

function guardar_localstorage() {
	let persona = {
		nombre: 'Juan',
		edad: 24,
		correo: 'asj@fasd.com',
		coords: {
			lat: 10,
			long: 10,
		},
	};

	let nombre = 'Pedro';
	localStorage.setItem('nombre', nombre);
	localStorage.setItem('persona', JSON.stringify(persona));
}
