import { Api } from './Api.js';
import { Datos } from './Datos.js';

export class Opciones {
	constructor(response) {
		this.response = response;
		this.datos = new Datos();
	}

	loadOptions = () => {
		let opciones = `
      <a class="contenedor-opcion texto" id="personal">Personal</a>
      <a class="contenedor-opcion texto">Homeworld</a>
      <a class="contenedor-opcion texto">Species</a>
      <a class="contenedor-opcion texto">Vehicles</a>
      <a class="contenedor-opcion texto">Starships</a>
    `;
		document.getElementById('contenedorOpciones').innerHTML = opciones;
	};

	async addDataOption(selectedData, opcion) {
		// console.log(selectedData);
		let data;
		switch (opcion) {
			case 'Personal':
				this.datos.showPersonalData(selectedData);
				break;
			case 'Homeworld':
				data = await this.getDataByOption(selectedData, 'homeworld');
				this.datos.showHomeworldData(data);
				break;
			case 'Species':
				data = await this.getDataByOption(selectedData, 'species');
				this.datos.showSpeciesData(data);
				break;
			case 'Vehicles':
				data = await this.getDataByOption(selectedData, 'vehicles');
				this.datos.showVehiclesData(data);
				break;
			case 'Starships':
				data = await this.getDataByOption(selectedData, 'starships');
				this.datos.showStarshipsData(data);
				break;
			default:
		}
	}

	async getDataByOption(selectedData, option) {
		let response;

		// en caso de que la opcion tenga como valor un solo endpoint este sera de tipo string
		if (typeof selectedData[option] === 'string') {
			response = await this.validateSearch(selectedData[option]);
			this.updateResponses(selectedData, response, option);
		} else if (typeof selectedData[option] === 'object') {
			// si ya se ejecuto este proceso el valor para esta opcion sera de tipo object
			// o si es un arreglo de endpoints
			// para validar si es un arreglo se usa la propiedad length
			if (selectedData[option].length >= 1) {
				// valida que no tenga la propiedad name
				// ya que no distinge de arreglos y objetos, y algunos objetos contienen la propiedad length
				if (selectedData[option].name === undefined) {
					response = await this.validateSearch(selectedData[option][0]);
					this.updateResponses(selectedData, response, option);
				}
			}
			// obtiene los datos de la opcion seleccionada almacenada en el response principal
			if (
				selectedData[option] != null &&
				selectedData[option] != '' &&
				selectedData[option].name != undefined
			) {
				response = selectedData[option];
			}
		}

		return response;
	}

	// modifica el response principal, agregando el resultado obtenido de la opcion selecciona cuando esta se ejecuta por vez primera
	updateResponses(selectedData, responseOption, opcion) {
		for (let i = 0; i < this.response.length; i++) {
			let data = this.response[i];

			if (data.name === selectedData.name) {
				this.response[i][opcion] = responseOption;
			}
		}
	}

	async validateSearch(endPoint) {
		let response;
		if (endPoint) {
			const api = new Api(endPoint);
			if (await api.validarRespuesta()) {
				response = await api.obtenerResultados();
			}
		}
		return response;
	}
}
