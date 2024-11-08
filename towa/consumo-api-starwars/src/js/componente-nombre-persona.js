import { obtenerDatosPersonal } from './http-provider';
import { PersonasLista } from '../classes/personas-lista.class';
import { initOpcionesPersona } from './componente-opcion-persona';

// Referencias al HTML
const btnNombres = document.querySelector('#btnNombres');
const btnNombresDropdown = document.querySelector('#btnNombresDropdown');
const idNext = document.querySelector('#next');
const idPrevious = document.querySelector('#previous');

let personasLista;
let datosPersona;

let numeroPagina = 1;

const crearBtnNombresHtml = (nombre) => {
	const html = `
        <button type="button" class="btn btn-lg btn-26a0ff">${nombre}</button>
    `;

	const dropdownHtml = `
        <li><a class="dropdown-item">${nombre}</a></li>
    `;

	const divBtn = document.createElement('div');
	const divBtnDropdown = document.createElement('div');

	divBtn.innerHTML = html;
	divBtnDropdown.innerHTML = dropdownHtml;

	btnNombres.append(divBtn.firstElementChild);
	btnNombresDropdown.append(divBtnDropdown.firstElementChild);
};

const dibujarBtnNombres = async () => {
	btnNombres.innerHTML = '';
	btnNombresDropdown.innerHTML = '';

	const nombres = personasLista.obtenerListaNombres();
	nombres.map(crearBtnNombresHtml);
};

const nuevaInstanciaPeopleList = async () => {
	personasLista = new PersonasLista(await obtenerDatosPersonal(numeroPagina));
};

const eventos = () => {
	btnNombres.addEventListener('click', (event) => {
		const filtro = event.target.tagName;
		const tieneClassActivo = document.querySelector('.activo');

		// Al usar la delegacion de eventos se valida que solo se haya dado clic a elementos de tipo button y no al contenedor principal
		if (filtro === 'BUTTON') {
			const personaSeleccionada = event.target.textContent;

			if (tieneClassActivo && tieneClassActivo != null) {
				tieneClassActivo.classList.remove('activo');
			}

			event.target.classList.add('activo');
			datosPersona = personasLista.buscarPorNombre(personaSeleccionada);

			initOpcionesPersona(datosPersona);
		}
	});

	btnNombresDropdown.addEventListener('click', (event) => {
		const filtro = event.target.tagName;
		const tieneClassActive = document.querySelector('.active');

		if(filtro === 'A') {
			const personaSeleccionada = event.target.textContent;

			if(tieneClassActive && tieneClassActive != null) {
				tieneClassActive.classList.remove('active');
			}

			event.target.classList.add('active');
			datosPersona = personasLista.buscarPorNombre(personaSeleccionada);

			initOpcionesPersona(datosPersona);
		}

	});

	idNext.addEventListener('click', async() => {
		if(numeroPagina <= 8) {
			numeroPagina++;
			await nuevaInstanciaPeopleList();
			dibujarBtnNombres();
			initOpcionesPersona();
		}
	});

	idPrevious.addEventListener('click', async() => {
		if(numeroPagina > 1) {
			numeroPagina--;
			await nuevaInstanciaPeopleList();
			dibujarBtnNombres();
			initOpcionesPersona();
		}
	});

};

export const init = async () => {
	console.time('23');
	
	await nuevaInstanciaPeopleList();
	
	dibujarBtnNombres();
	
	eventos();

	initOpcionesPersona();
	
	console.timeEnd('23');
};
