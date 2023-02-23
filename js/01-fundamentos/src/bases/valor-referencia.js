let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = { ...juan };
// let ana = juan;
ana.nombre = 'Ana';

console.log({ juan, ana });

const spread = ({ ...persona }) => {
	persona.nombre = 'Tony';
	return persona;
};

const rest = (...persona) => {
	persona.nombre = 'Tony';
	return persona;
};

let peter = { nombre: 'Peter' };
let tony = spread(peter);
let tony2 = rest(peter);

console.log({ peter, tony, tony2 });

// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('slice');
const otrasFrutas2 = [...frutas];
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });
