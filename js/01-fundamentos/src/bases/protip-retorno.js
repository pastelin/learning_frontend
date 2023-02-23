// function crearPersona(nombre, apellido) {
//   return { nombre, apellido };
// }

const crearPersona = (nombre, apellido) => ( {nombre, apellido} );

console.log(crearPersona('juan', 'pastelin'));

// function imprimeArgumentos() {
//   console.log(arguments);
// }

const imprimeArgumentos = (...args) => {
  return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos(1,2,3,4,5);
console.log({casado, vivo, nombre, saludo});

const { apellido:nuevoApellido } = crearPersona('juan', 'pastelin');
console.log(nuevoApellido);

const tony = {
  nombre: 'Tony Stark', 
  codeName: 'Ironman',
  vivo: false,
  edad: 40, 
  trajes: ['mar', '3df']
};

const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) => {
console.log({nombre});  
console.log({codeName});  
console.log({vivo});  
console.log({edad});  
console.log({trajes});  

}

imprimePropiedades(tony);