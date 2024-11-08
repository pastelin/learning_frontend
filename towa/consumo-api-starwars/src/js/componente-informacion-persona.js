import { PersonaComponente } from '../classes/persona-componente.class';

// Referencia al html
const contenedorPersona = document.querySelector('#contenedorPersonaje');
let divInfoPersona;
let personaComponente;

const contenedorSinInfo = () => {
	const sinInfoHtml = `
		<div class="text-center text-muted h3 mt-5">
			<h3>No se encontr&oacute; informaci&oacute;n</h3>
		</div>
		
	`;

	const hTitulo = document.querySelector('#titulo');

	hTitulo.innerHTML 		 = '';
	divInfoPersona.innerHTML = '';

	const divSinInfo = document.createElement('div');
	divSinInfo.innerHTML = sinInfoHtml;

	divInfoPersona.append(divSinInfo.firstElementChild);
};

const crearContenedorPersona = (nombre) => {
	const tituloHtml = `
        <h3 id="titulo" class="mb-3 my-sm-3 ps-sm-4 text-muted text-center text-sm-start">
            ${nombre}
        </h3>
    `;

	const rowInfoHtml = `
        <div class="row" id="informacionPersonaje">
        </div>
    `;

	const divTitulo = document.createElement('div');
	const divRow = document.createElement('div');

	divTitulo.innerHTML = tituloHtml;
	divRow.innerHTML = rowInfoHtml;

	contenedorPersona.append(divTitulo.firstElementChild);
	contenedorPersona.append(divRow.firstElementChild);
};

const crearInformacion = (propiedad, valor) => {
	const tituloHtml = personaComponente.obtenerTituloHtml(propiedad);

	const infoHtml = personaComponente.obtenerInfoHtml(valor);

	const divTitulo = document.createElement('div');
	const divInfo = document.createElement('div');

	divTitulo.innerHTML = tituloHtml;
	divInfo.innerHTML = infoHtml;

	divInfoPersona.append(divTitulo.firstElementChild);
	divInfoPersona.append(divInfo.firstElementChild);
};

const dibujarInformacion = (datosPersona, opcion) => {
	divInfoPersona = document.querySelector('#informacionPersonaje');
	divInfoPersona.innerHTML = '';

	// estos valores coinciden con las propiedades que tiene el objeto datosPersona
	const propiedades = personaComponente.buscarPorPropiedad(opcion);

	// Recorre la lista para poblar los datos que se requieren, llamando al metodo crearInfoPersona que recibe dos parametros
	// el primero el nombre del atributo y el segundo su valor
	propiedades.forEach((propiedad) => crearInformacion(propiedad, datosPersona[propiedad]));
};

const initInformacion = (datosPersona, opcion) => {
	contenedorPersona.innerHTML = '';

	if(datosPersona && opcion) {
		crearContenedorPersona(datosPersona.name);
	
		personaComponente = new PersonaComponente();
		dibujarInformacion(datosPersona, opcion);
	}
};

export { initInformacion, contenedorSinInfo };
