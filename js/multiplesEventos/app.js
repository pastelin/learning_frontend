const lista = document.getElementById('lista');
const btnAgregar = document.getElementById('btn-agregar');

// Ejemplo que no se recomiendo hacer
// const agregarListeners = () => {
//   lista.childNodes.forEach((elemento) => {
//     elemento.addEventListener('click', (e) => {
//       e.target.classList.toggle('activo');
//     });
//   });
// }

// agregarListeners();

// btnAgregar.addEventListener('click', () => {
// 	const elemento = `
// 		<a href="#">
// 			Elemento <i class="bi bi-check-square-fill"></i>
// 		</a>
// 	`;

// 	lista.innerHTML += elemento;
//   agregarListeners();
// });

// Ejemplo que se debe de usar

lista.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if(e.target && e.target.tagName === 'A') {
    e.target.classList.toggle('activo');
  }        
});

btnAgregar.addEventListener('click', () => {
	const elemento = `
		<a href="#">
			Elemento <i class="bi bi-check-square-fill"></i>
		</a>
	`;

	lista.innerHTML += elemento;
});