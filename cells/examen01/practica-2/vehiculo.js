class Vehiculo{
	constructor(matricula, modelo){
	  this.matricula = matricula;
	  this.modelo = modelo;
	}
	getMatricula(){return this.matricula}
	getModelo(){return this.modelo}
	//setMatricula(valorMatricula){this.matricula = valorMatricula}

}

class Taxi extends Vehiculo{
	constructor(matricula, modelo, numeroLicencia){
	  super(matricula,modelo);
	  this.numeroLicencia = numeroLicencia;
	}
	getNumeroLicencia(){return this.numeroLicencia}
	setNumeroLicencia(valorNumeroLicencia){
	  this.numeroLicencia = numeroLicencia;
	}

}

class ClaseCinco extends Vehiculo{
	constructor(matricula, modelo, numeroPlazas){
	  super(matricula, modelo);
	  this.numeroPlazas = numeroPlazas;
	}
	getNumeroPlazas(){
	  return this.numeroPlazas
	}
	setNumeroPlazas(valorNumeroPlazas){
	  this.numeroPlazas = numeroPlazas
	}

}

