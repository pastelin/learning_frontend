let diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

let dia = 3;
console.log(diaLetras[dia]);

function bar(foo) {
	return (foo && foo * 3) || null;
}

console.log(bar(true));

// Pro tip: Asignaciones con operadores

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hi World' && 150; // 150
const a2 = 'hola' && 'Mundo' && soyFalso && true; // false
const a3 = soyFalso || 'Ya no soy falso'; // ya no soy falso
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; //Ya no soy falso de nuevo
const a5 = soyFalso || soyUndefined || true || 'Ya no soy falso de nuevo' || true; // true

console.log(a2);