// --------------------------> Objeto calificación
class Calificaciones {

	constructor(name='', avg=0){
	  this.name = name;
	  this.avg = avg;
	}
}
// -------------------------------> Objeto persona
class Persona{
	constructor(name = '', age = -1){
	  this.name = name; 
	  this.age = age;
	  var c = new Calificaciones('Fisica', 9);
	  this.calif = [];
	}
	getAge(){
	  return this.age;
	}

	isOlder(){
	  return this.age>=18;
	}

	printCalif(){
	  this.calif.forEach(item => {
	  console.log(`${item.name}: ${item.avg}`)
	  })
	}

	addCalif(obj){
	  this.calif.push(obj);  
	}

	removecalif(name){}


}
const persona1 = new Persona('Juan', 20);
console.log(persona1.getAge());
console.log(persona1.isOlder());
var califi = new Calificaciones('Matematicas', 8);
var califi2 = new Calificaciones('Español', 10);
console.log(persona1.addCalif(califi));
console.log(persona1.addCalif(califi2));
console.log(persona1.printCalif());

const persona2 = new Persona('Ana', 12);
console.log(persona2.getAge());
console.log(persona2.isOlder());
