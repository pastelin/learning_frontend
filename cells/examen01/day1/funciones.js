var a = 1;
let b = 2;
const c = 3;
ffasd;
/* Ejemplo dentro del mismo ambito */
//var a = 2; //Ok
//a = 3; //Ok

//let b = 4; Error
//b = 3; //Ok

//const c = 4; Error
//c = 5; Error

/* Ejemplo dentro de otro ambito */
const demo = function () {
	//var a = 'AAA'; //Ok
	a = 'AA'; //Ok

	//let b = 'BBB'; Ok
	b = 'BB'; //Ok

	const c = 'CC';
	//c = 'CCC'; Error

	console.log(`a: ${a}`);
	console.log(`b: ${b}`);
	console.log(`c: ${c}`);
};

demo();

console.log('*****************************************************');
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);

/* Ejemplo dentro de otro ambito pero con paso de parámetros */

const demoPasoParametro = (a, b, c) => {
	//var a = 'new'; Ok
	a = 'AAA';

	//let b = 'new'; Error
	b = 'BBB';

	//const c = 'new'; Error
	c = 'CCC';

	console.log('*****************************************************');
	console.log(`a: ${a}`);
	console.log(`a: ${b}`);
	console.log(`a: ${c}`);
};

demoPasoParametro(a, b, c);

console.log('*****************************************************');
console.log(`a: ${a}`);
console.log(`a: ${b}`);
console.log(`a: ${c}`);

function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		debugger;
		return base * power(base, exponent - 1);
	}
}

console.log(power(2, 3));
// → 8

/*
------> Dentro del mismo ambito
* @var es redeclarable y reasignable
* @let es reasignable pero no redeclarable
* @const no es reasignable ni redeclarable

-----> Dentro de otro ambito (función)
* @var es redeclarable y reasignable
    si es redeclarable el valor asignado sólo será dentro del mismo
    si es reasignable cambiará el valor de la variable principal

* @let es redeclarable y reasignable
    si es redeclarable el valor asignado sólo será válido dentro del mismo ambito
    si es reasignable cambiará el valor de la variable principal


* @const no es reasignable, pero es redeclarable y el valor solo será 
    válido dentro de la función

------> Dentro de otro ambito pero con paso de parámetros

* @var es reasignable y redeclarable pero sea cual sea esta no afectará a 
  la variable principal, ya que no se puede modificar un paso de parámetro

* @let no es redeclarable, pero es reasignable y al igual que var este no 
  cambiará el valor al @let principal

* @const no es redeclarable, pero es reasignable y el valor no  afectará a 
  la constante principal


*/
