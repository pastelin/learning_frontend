class Vehiculo {
  constructor(matricula, modelo) {
    this.matricula = matricula;
    this.modelo = modelo;
  }

  getMatricula() {
    return this.matricula;
  }

  getModelo() {
    return this.modelo;
  }
}

class Autobus extends Vehiculo {
  constructor(matricula, modelo, numeroPlazas) {
    super(matricula, modelo);
    this.numeroPlazas = numeroPlazas;
  }

  getNumeroPlazas() {
    return this.numeroPlazas;
  }

  setNumeroPlazas(numeroPlazas) {
    this.numeroPlazas = numeroPlazas;
  }
}

class Taxi extends Vehiculo {
  constructor(matricula, modelo, numerLicencia) {
    super(matricula, modelo);
    this.numerLicencia = numerLicencia;
  }

  getNumeroLicencia() {
    return this.numerLicencia;
  }

  setNumeroLicencia(numeroLicencia) {
    this.numerLicencia = numeroLicencia;
  }
}

const taxi = new Taxi("EDOMEX631", "2001", "123456789");

console.log(taxi.getNumeroLicencia());
