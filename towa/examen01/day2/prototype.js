// -------------------------------> Objeto persona

var Persona = function(name, age = -1){
	this.name = name; 
	this.age = age;
	//var c = new Calificacion('Fisica', 9);
	this.calif = [];

}

// --------------------------> Objeto calificación

var Calificacion = function(name='', avg=0){
	this.name = name;
	this.avg = avg;
}

Persona.prototype.getAge = function(){
	return this.age;
}

Persona.prototype.isOlder = function(){
	return this.age>=18;
}

Persona.prototype.printCalif = function(){
	this.calif.forEach(item => {
	console.log(` ${item.name}: ${item.avg}`)})
}
Persona.prototype.addCalif = function(obj){
	this.calif.push(obj);
}

Persona.prototype.removeCalificacion = function(name){
	let nombre = this.calif
console.log(name)
}


const persona1 = new Persona('Juan', 20);

console.log(persona1.getAge());

console.log(persona1.isOlder());

var obj = new Calificacion('Matematicas', 10);

persona1.addCalif(obj);

persona1.printCalif();

persona1.removeCalificacion('Matematicas'); 

//const persona2 = new Persona('Ana', 12);
//console.log(persona2.getAge());
//console.log(persona2.isOlder());
