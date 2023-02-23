let inputSeleccionImagen = document.getElementById('seleccionImagen');
let elementoImgPrevisualizar = document.getElementById('imagenPrevisualizacion');
let btnObtenerImg = document.getElementById('btnObtenerImg');
let btnGuardarImg = document.getElementById('btnGuardarImg');
let contenedorMostrarImg = document.getElementById('mostrarImg');

inputSeleccionImagen.addEventListener('change', () => {
	const imagenes = inputSeleccionImagen.files;

	if (imagenes.length) {
		const objURL = URL.createObjectURL(imagenes[0]);
		elementoImgPrevisualizar.src = objURL;
	}
});

async function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

btnGuardarImg.addEventListener('click', async function guardarBase64() {
	let imagenes = inputSeleccionImagen.files;

	if (imagenes.length) {
		let imgBase64 = await getBase64(imagenes[0]);
		localStorage.setItem('imgBase64', imgBase64);
	} else {
		alert('Favor de seleccionar una imagen');
	}
});

btnObtenerImg.addEventListener('click', () => {
	let imgBase64 = localStorage.getItem('imgBase64');
	contenedorMostrarImg.src = imgBase64;
});
