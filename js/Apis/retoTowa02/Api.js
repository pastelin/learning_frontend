export class Api {
	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	async getResponse() {
		const response = await fetch(this.endpoint);
		return response;
	}

	async validarRespuesta() {
		let bandera = false;

		try {
			const respuesta = await this.getResponse();

			if (respuesta.status === 200) {
				bandera = true;
			} else if (respuesta.status === 404) {
				console.log('No se encontro ninguna coincidencia');
			} else {
				console.log('No pudo identificar el error');
			}
		} catch (error) {
			console.log(error);
		}

		return bandera;
	}

	async obtenerResultados() {
		const datos = await this.getResponse();
		return await datos.json();
	}
}
