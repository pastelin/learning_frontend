document.addEventListener('DOMContentLoaded', () => {
	iniciarApp();
});

const iniciarApp = () => {
    navegacionFija();
	crearGaleria();
    scrollNav();
};

const navegacionFija = () => {
    // Elemento a fijar
    const barra = document.querySelector('.header');
    // Elemento a partir de donde fijara el elemento
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');


    window.addEventListener('scroll', () => {
        // getBoundingClientRect().top: mide la distancia entre el elemento sobreFestival y la distancia que hay en la parte superior de la pantalla
        // el valor inicial de getBoundingClientRect().top, es la distancia entre sobreFestival y la parte superior de la pantalla, ejemplo 800px
        // si el scroll baja la distancia disminuye
        // mientras el elemento sobreFestival no sobre pase la distancia de la pantalla superior, este tendra un valor positivo
        // si la parte superior de la pantalla sobre pasa el elemento sobreFestival este tendra un valor negativo
        if(sobreFestival.getBoundingClientRect().top < 0) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
        console.log(sobreFestival.getBoundingClientRect().top);
    })

};

const scrollNav = () => {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);

            seccion.scrollIntoView({behavior: "smooth"})
        });
    } );

};

const crearGaleria = () => {
	const galeria = document.querySelector('.galeria-imagenes');

	for (let i = 1; i <= 12; i++) {
		const imagen = document.createElement('picture');
		imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
			<source srcset="build/img/thumb/${i}.webp" type="image/webp" />
			<img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria" />
        `;

		imagen.onclick = () => {
			mostrarImagen(i);
		};

		galeria.appendChild(imagen);
	}
};

const mostrarImagen = (id) => {
	const imagen = document.createElement('picture');
	const body = document.querySelector('body');

    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif" />
		<source srcset="build/img/grande/${id}.webp" type="image/webp" />
		<img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria" />
    `;

    // Crea el overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = () => {
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    
    // Boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = "X";
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = () => {
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);

    // Añadirlo al HTML
    cerrarModal.textContent = "X";
    body.appendChild(overlay);
    body.classList.add('fijar-body');

};
