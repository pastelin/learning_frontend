import { initInformacion, contenedorSinInfo } from './componente-informacion-persona';
import { obtenerDatosOtros } from './http-provider';

// Referencia al HTML
const btnOpcionesSuperior = document.querySelector('#btnOpcionesPersonajeSuperior');
const btnOpcionesIzquierdo = document.querySelector('#btnOpcionesPersonajeIzquierdo');

const opciones = ['Personal', 'Homeworld', 'Species', 'Vehicles', 'Starships'];
let datosPersonal;
let datosOtros;

const crearBtnOpcionesPersona = (opcion) => {
	const superiorHtml = `
        <li class="nav-item"><a class="nav-link" id="opcion${opcion}">${opcion}</a></li>
    `;

	const izquierdaHtml = `
        <a class="nav-link" href="#" id="opcion${opcion}">${opcion}</a>
    `;

	const divSuperior = document.createElement('div');
	const divIzquierdo = document.createElement('div');

	divSuperior.innerHTML = superiorHtml;
	divIzquierdo.innerHTML = izquierdaHtml;

	// Usa firstElementChild para que no integre el elemento <div>, ya que solo necesitamos el elemento <li> o <a>
	btnOpcionesSuperior.append(divSuperior.firstElementChild);
	btnOpcionesIzquierdo.append(divIzquierdo.firstElementChild);
};

const dibujarOpcionePersona = () => {
	opciones.forEach(crearBtnOpcionesPersona);
};

const eventos = () => {
	btnOpcionesPersonajeSuperior.addEventListener('click', async (event) => {
		const filtro = event.target.tagName;
		const tieneClassActive = document.querySelector('.nav-link.active');

		if (filtro === 'A') {
			const opcionSeleccionada = event.target.textContent;

			if (tieneClassActive && tieneClassActive != null) {
				tieneClassActive.classList.remove('active');
				tieneClassActive.removeAttribute('aria-current');
			}

			event.target.classList.add('active');
			event.target.setAttribute('aria-current', 'page');

			await poblarInformacionPorOpcion(opcionSeleccionada);
		}
	});

	btnOpcionesIzquierdo.addEventListener('click', async(event) => {
		const filtro = event.target.tagName;
		const tieneClassActive = document.querySelector('.nav-link.active');

		if (filtro === 'A') {
			const opcionSeleccionada = event.target.textContent;

			if (tieneClassActive && tieneClassActive != null) {
				tieneClassActive.classList.remove('active');
				tieneClassActive.removeAttribute('aria-current');
			}

			event.target.classList.add('active');
			event.target.setAttribute('aria-current', 'page');

			await poblarInformacionPorOpcion(opcionSeleccionada);
		}
	});
};

const poblarInformacionPorOpcion = (opcion) => {
	const opcionLowerCase = opcion.toLowerCase();

	if (opcion === 'Personal') {
		initInformacion(datosPersonal, opcionLowerCase);
	} else {
		poblarDatos(opcionLowerCase);
	}
};

const poblarDatos = async (opcion) => {
	await consumirEndpoint(datosPersonal[opcion]);
	if(datosOtros) {
		initInformacion(datosOtros, opcion);
	} else {
		contenedorSinInfo();
	}
};

const consumirEndpoint = async (endpoint) => {
	const tipoDato = typeof endpoint;

	if (tipoDato === 'object' && endpoint.length) {
		datosOtros = await obtenerDatosOtros(endpoint[0]);
	} else if (endpoint.length) {
		datosOtros = await obtenerDatosOtros(endpoint);
	} else {
		datosOtros = null;
	}
};

export const initOpcionesPersona = (datos) => {
	// Elimina contenido previo para actualizar informacion
	btnOpcionesSuperior.innerHTML = '';
	btnOpcionesIzquierdo.innerHTML = '';

	dibujarOpcionePersona();

	if (datos) {
		eventos();
		datosPersonal = datos;

		// Asigna clase active a la opcion Personal cada que se da clic al nombre de algun personaje
		const opcionPersonal = document.querySelector('#opcionPersonal');
		opcionPersonal.classList.add('active');
		opcionPersonal.setAttribute('aria-current', 'page');

		// Inicializa informacion del personaje
		initInformacion(datos, 'personal');
	} else {
		initInformacion();
	}

};
