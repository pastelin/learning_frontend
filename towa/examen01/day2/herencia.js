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
	  this.calif = [c];
	}
	getAge(){
	  return this.age;
	}

	isOlder(){
	  return this.age>=18;
	}

}


class Student extends Persona{
  constructor(name, age){
    super(name, age)
  }

}


const said = new Student('said', 36);

console.log(said.age);
