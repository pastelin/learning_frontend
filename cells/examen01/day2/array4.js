console.log('-----filter----- reduce');

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


// usando map y reduce
let val = personas.map(item => item.age)
	.reduce((acum, next) => {
         console.log(acum);
	 console.log(next);
	return acum+next;

});


// usando map, reduce y filter
let val1 = personas.map(item => item.age)
	.filter(item2 => item2>=18)
	.reduce((acum, next) => acum+next);


console.log(val1);


/*

usando reduce
let arr = [3,2,1,];

let val = arr.reduce((acum, next, index, array)=>{
console.log(index);
console.log(array);

console.log(`acum: ${acum}, next:${next}`);
return acum+next;

});


console.log(val);
*/
