console.log('-----filter-----');

let personas = [
  {name: 'Ana', age: 18, 
  materias:[{title: 'Fisica', avg: 10}]
},
  {name: 'Juan', age: 22,
  materias:[{title: 'fisica', avg: 8}]
},
  {name: 'Pedro', age: 15,
  materias:[
	{title: 'fisica', avg: 8},
  	{title: 'Matematica', avg: 5}
	]
},
  {name: 'MAria', age: 16,
  materias:[
	{title: 'Fisica', avg: 5},
	{title: 'Matematica', avg: 8}

	]
}
];

// ------------------> forEach
personas.forEach(item=>{console.log(item)});


//------------------------> every

// const val =  personas.every(item => item.age < 1);



