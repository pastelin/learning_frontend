console.log('-----filter-----');

let personas = [
  {name: 'Ana', age: 18, 
  materias:[{title: 'fisica', avg: 10}]
},
  {name: 'Juan', age: 22,
  materias:[{title: 'fisica', avg: 9}]
},
  {name: 'Pedro', age: 15,
  materias:[
	{title: 'fisica', avg: 5},
  	{title: 'Matematica', avg: 8}
	]
},
  {name: 'MAria', age: 16,
  materias:[
	{title: 'Fisica', avg: 5},
	{title: 'Matematica', avg: 5}

	]
}
];
//const val = personas.filter(item => item.age >= 18);


const materia = (item) => {
	/*
	*se realiza un filter de las materias para validar que haya pasado la materia
	*el valor se guarda en la variable "valor", y esta almacenará un valor boleano
	*se retorna el valor de la variable
	*/
	let valor = true;
	item.materias.filter( data => {
		if (valor) {
			valor = data.avg>=8
		}
	});
	//console.log(valor);
	return valor;
}

const persona = personas.filter( item => materia(item)
	// en la variable "valor" almacenará un valor boleano
	//let valor;
	//retorna el valor de la función y mostrará los datos mientras sea verdadero
	//return materia(item);
	//console.log(materia(item));

);

console.log(persona)




console.log('-------------->mapas')


const val = personas.map(item => {
	item.name = item.name.toUpperCase();
	return item;

});

//const val = personas.map(item =>item.name);


console.log(val);
