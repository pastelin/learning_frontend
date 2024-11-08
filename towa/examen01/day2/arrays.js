console.log('----------- Array ------------');

let arr = ['a', 'b', 'c', 'd','e'];
let arr2 = ['1','2','3','4','5','6','7','8','9','10'];
//let x = arr.pop();
//let y = arr.push('C');
//let z = arr.reverse();
//let a = arr.shift();
//let b = arr.sort();
let c = arr.splice(3,3); // elimina los elementos en la posición dada del arreglo
//let d = arr.concat(arr2);
//let e = arr.indexOf('a');
//let f = arr.lastIndexOf('a');
//let g = arr.join('|');
let h = arr.slice(1,3); // copia el valor  de las posiciones
//let i = arr.toString();

console.log(`El valor de h es: ${c}:  ${arr}`);


//---------------------------------------> iteradores

/* 
const fn = (item) => item>1;

let j = arr2.filter(fn);
*/

//console.log(j);



// iterador con multiplos de 3
/*
const mul = (item) => item%3===0
let k = arr2.filter(mul);
console.log(k);
*/


