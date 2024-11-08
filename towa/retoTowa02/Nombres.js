import { Opciones } from './Opciones.js';
import { Datos } from './Datos.js';

export class Nombres {
	constructor(response) {
		this.opciones = new Opciones(response);
		this.datos = new Datos();
		this.response = response;
		this.selectedData;
		this.isClickName = false;
		this.previousTargetName;
		this.previousTargetOption;
		this.isTherePreviousTargetName = false;
		this.isTherePreviousTargetOption = false;
	}

	loadNames() {
		let contenedorNombres = '';
		// console.log(this.response);

		const nombres = this.response.map((resultado) => resultado.name);
		// console.log(nombres);

		nombres.forEach((nombre) => {
			contenedorNombres += `
        <a class="contenedor-nombre texto">
          ${nombre}
        </a>
      `;
		});

		// muestra los elementos de nombre y opciones
		document.getElementById('contenedorNombres').innerHTML = contenedorNombres;
		this.opciones.loadOptions();

		this.addEventContainer(this.response);
	}

	addEventContainer = (response) => {
		const contenedor = document.getElementById('contenedor');

		// Agrega evento al contenedor principal y debido a la delegacion de eventos estos se propagaran a todos los elementos hijos
		contenedor.addEventListener('click', (e) => {
			// valida que solo se agrege el evento a los botones
			if (e.target && e.target.tagName === 'A') {
				let nombreClase = e.target.classList[0];
				// console.log(nombreClase);

				if (nombreClase === 'contenedor-nombre') {
					// bandera que indica si se ha selecciona un elemento en contenedor nombre, para permitir proceso de opciones
					this.isClickName = true;
					let nombreSeleccionado = e.target.innerText;

					this.selectedData = response.filter((resultado) => nombreSeleccionado === resultado.name);

					// muestra los datos del nombre seleccionado
					this.datos.showPersonalData(this.selectedData[0]);

					// valida si previamente se dio clic y si es asi remueve la clase de ese elemento (contenedor nombre)
					if (this.isTherePreviousTargetName) {
						this.previousTargetName.remove('activo');
					}

					// agrega clase al elemento selecciona y guarda la referencia para eliminar la clase al seleccionar otro elemento (contenedor nombre)
					e.target.classList.add('activo');
					this.previousTargetName = e.target.classList;
					this.isTherePreviousTargetName = true;

					// valida si previamente se dio clic y si es asi remueve la clase de ese elemento (contenedor opciones)
					if (this.isTherePreviousTargetOption) {
						this.previousTargetOption.remove('activo');
					}

					// agrega clase al elemento selecciona y guarda la referencia para eliminar la clase al seleccionar otro elemento (contenedor opciones)
					let btnPersonal = document.getElementById('personal');
					btnPersonal.classList.add('activo');
					this.previousTargetOption = btnPersonal.classList;
					this.isTherePreviousTargetOption = true;
				}

				if (nombreClase == 'contenedor-opcion' && this.isClickName) {
					let opcionSeleccionada = e.target.innerText;

					// valida si previamente se dio clic y si es asi remueve la clase de ese elemento (contenedor opciones)
					if (this.isTherePreviousTargetOption) {
						this.previousTargetOption.remove('activo');
					}

					// agrega clase al elemento selecciona y guarda la referencia para eliminar la clase al seleccionar otro elemento (contenedor opciones)
					e.target.classList.add('activo');
					this.previousTargetOption = e.target.classList;
					this.isTherePreviousTargetOption = true;

					this.opciones.addDataOption(this.selectedData[0], opcionSeleccionada);
				}
			}
		});
	};
}
