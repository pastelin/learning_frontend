// constantes para almacenar la referencia de los botones
const btnAddAhorro = document.getElementById('addAHorro');

// constantes para almacenar la referencia para el cierre del popup
const btnCerrarPopupAhorro = document.getElementById('btn-cerrar-popup-ahorro');

// constantes para almacenar la referencia de los contenedores a mostrar mediante overlay y popup
const overlayAhorro = document.getElementById('overlay-ahorro');
const popupAhorro = document.getElementById('popup-ahorro');

btnAddAhorro.addEventListener('click', () => {
	_addClassActive(overlayAhorro, popupAhorro);
});

btnCerrarPopupAhorro.addEventListener('click', () => {
	_removeClassActive(overlayAhorro, popupAhorro);
});

const _addClassActive = (overlayAhorro, popupAhorro) => {
	overlayAhorro.classList.add('active');
	popupAhorro.classList.add('active');
};

const _removeClassActive = (overlayAhorro, popupAhorro) => {
	overlayAhorro.classList.remove('active');
	popupAhorro.classList.remove('active');
};
