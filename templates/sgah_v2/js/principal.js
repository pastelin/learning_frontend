const checkAhorro = document.querySelector('#inversionAhorro');
const checkgasto = document.querySelector('#inversionGasto');
const checkPrestamo = document.querySelector('#checkPrestamo');

const divInversionAhorro = document.querySelector('#divInversionAhorro');
const divPrestamo = document.querySelector('#divPrestamo');
const divInversionGasto = document.querySelector('#divInversionGasto');

const eventos = () => {
	checkAhorro.addEventListener('click', () => {
		if (checkAhorro.checked) {
			divInversionAhorro.classList.remove('contenedor__formulario--desactivado');
		} else {
			divInversionAhorro.classList.add('contenedor__formulario--desactivado');
		}
	});

	checkPrestamo.addEventListener('click', () => {
		if (checkPrestamo.checked) {
			divPrestamo.classList.remove('contenedor__formulario--desactivado');
		} else {
            divPrestamo.classList.add('contenedor__formulario--desactivado');
        }

	});

    checkgasto.addEventListener('click', () => {
        if(checkgasto.checked) {
            divInversionGasto.classList.remove('contenedor__formulario--desactivado');
        } else {
            divInversionGasto.classList.add('contenedor__formulario--desactivado');
        }
    })
};

eventos();
