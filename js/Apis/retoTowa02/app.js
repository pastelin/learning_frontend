import { Nombres } from './Nombres.js';
import { Api } from './Api.js';
class App {
	constructor() {
		this.loadPeople();
	}

	async loadPeople() {
		let resultados;

		const api = new Api('https://swapi.dev/api/people/');

		if (await api.validarRespuesta()) {
			resultados = await api.obtenerResultados();
			const nombres = new Nombres(resultados.results);
			nombres.loadNames();
		} else {
			this.loadMessageError();
		}
	}

	loadMessageError = () => {
		let mensaje = `
      No se logro obtener informaci\u00F3n, revise su conexi\u00F3n a internet o consulte con su administrador
    `;
		document.getElementById('mensajeError').innerHTML = mensaje;
	};
}

new App();
