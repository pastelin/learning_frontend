const cuadroMagico = (valores) => {
  // posibles valores para las casillas pares
  let numerosImpares = [1, 3, 5, 7, 9];

  // posibles valores para las casillas impares
  let numerosPares = [2, 4, 6, 8];

  // Los valores corresponden a las casillad 1, 3, 5, 7, 9, en ese orden
  let valorCasillasImpares = [
    valores[0][0],
    valores[0][2],
    valores[1][1],
    valores[2][0],
    valores[2][2],
  ];
  // Los valores corresponden a las casillad 2, 4, 6, 8 en ese orden
  let valorCasillasPares = [
    valores[0][1],
    valores[1][0],
    valores[1][2],
    valores[2][1],
  ];

  /*---------- calcula valores para casillas impares / diagonales----------------*/

  // valida si existen inicialmente numeros primos
  validaValorNumeroPar();

  // valida y cambia el valor en caso de tener menos de 2 valores primos
  validaValorNumeroImpar();

  // valida y cambia el valor para las filas
  validaFilas();

  console.log(valores);

  function validaValorNumeroPar() {
    // valida si existen inicialmente numeros primos
    for (let i = 0; i < valorCasillasImpares.length; i++) {
      if (i == 2) {
        if (valorCasillasImpares[i] != 5) {
          valores[1][1] = 5;
          eliminaNumeroImpar(numerosImpares.indexOf(5));
        } else {
          eliminaNumeroImpar(numerosImpares.indexOf(5));
        }
      }

      if (validarNumeroPrimo(valorCasillasImpares[i]) && i != 2) {
        let valorUltimaCasilla = 0;

        if (i == 0) {
          valorUltimaCasilla = 15 - (valorCasillasImpares[i] + 5);
          valores[2][2] = valorUltimaCasilla;
          valorCasillasImpares[4] = valorUltimaCasilla;
          eliminaNumeroPar(numerosPares.indexOf(valorCasillasImpares[i]));
          eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
        } else if (i == 1) {
          // valida que no se haya usado el numere anteriormente
          if (numerosPares.indexOf(valorCasillasImpares[i]) >= 0) {
            valorUltimaCasilla = 15 - (valorCasillasImpares[i] + 5);
            valores[2][0] = valorUltimaCasilla;
            valorCasillasImpares[3] = valorUltimaCasilla;
            eliminaNumeroPar(numerosPares.indexOf(valorCasillasImpares[i]));
            eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
          } else if (numerosPares.length != 0) {
            let suma = valorCasillasImpares[1] + 5 + valorCasillasImpares[3];

            if (suma != 15) {
              valores[0][2] = numerosPares[0];
              valorCasillasImpares[1] = numerosPares[0];
              valorUltimaCasilla = 15 - (numerosPares[0] + 5);
              valores[2][0] = valorUltimaCasilla;
              valorCasillasImpares[3] = valorUltimaCasilla;
              eliminaNumeroPar(numerosPares.indexOf(numerosPares[0]));
              eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
            }
          }
        } else if (i == 3) {
          if (numerosPares.indexOf(valorCasillasImpares[i]) >= 0) {
            valorUltimaCasilla = 15 - (valorCasillasImpares[i] + 5);
            valores[0][2] = valorUltimaCasilla;
            valorCasillasImpares[1] = valorUltimaCasilla;
            eliminaNumeroPar(numerosPares.indexOf(valorCasillasImpares[i]));
            eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
          } else if (numerosPares.length != 0) {
            let suma = valorCasillasImpares[3] + 5 + valorCasillasImpares[1];

            if (suma != 15) {
              valores[2][0] = numerosPares[0];
              valorCasillasImpares[3] = numerosPares[0];
              valorUltimaCasilla = 15 - (numerosPares[0] + 5);
              valores[0][2] = valorUltimaCasilla;
              valorCasillasImpares[1] = valorUltimaCasilla;
              eliminaNumeroPar(numerosPares.indexOf(numerosPares[0]));
              eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
            }
          }
        } else if (i == 4) {
          if (numerosPares.indexOf(valorCasillasImpares[i]) >= 0) {
            valorUltimaCasilla = 15 - (valorCasillasImpares[i] + 5);
            valores[0][0] = valorUltimaCasilla;
            valorCasillasImpares[0] = valorUltimaCasilla;
            eliminaNumeroPar(numerosPares.indexOf(valorCasillasImpares[i]));
            eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
          } else if (numerosPares.length != 0) {
            let suma = valorCasillasImpares[4] + 5 + valorCasillasImpares[0];

            if (suma != 15) {
              valores[2][2] = numerosPares[0];
              valorCasillasImpares[4] = numerosPares[0];
              valorUltimaCasilla = 15 - (numerosPares[0] + 5);
              valores[0][0] = valorUltimaCasilla;
              valorCasillasImpares[0] = valorUltimaCasilla;
              eliminaNumeroPar(numerosPares.indexOf(numerosPares[0]));
              eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
            }
          }
        }
      }
    }
  }

  function validaValorNumeroImpar() {
    for (let i = 0; i < valorCasillasImpares.length; i++) {
      if (!validarNumeroPrimo(valorCasillasImpares[i]) && i != 2) {
        let valorUltimaCasilla = 0;

        if (i == 0 && numerosPares.length > 0) {
          valores[0][0] = numerosPares[0];
          valorUltimaCasilla = 15 - (numerosPares[0] + 5);
          valores[2][2] = valorUltimaCasilla;
          eliminaNumeroPar(numerosPares.indexOf(numerosPares[0]));
          eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
        } else if (i == 1 && numerosPares.length > 0) {
          valores[0][2] = numerosPares[0];
          valorUltimaCasilla = 15 - (numerosPares[0] + 5);
          valores[2][0] = valorUltimaCasilla;
          eliminaNumeroPar(numerosPares.indexOf(numerosPares[0]));
          eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
        } else if (i == 3 && numerosPares.length > 0) {
          valores[2][0] = numerosPares[0];
          valorUltimaCasilla = 15 - (numerosPares[0] + 5);
          valores[0][2] = valorUltimaCasilla;
          eliminaNumeroPar(numerosPares.indexOf(numerosPares[0]));
          eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
        } else if (i == 4 && numerosPares.length > 0) {
          valores[2][2] = numerosPares[0];
          valorUltimaCasilla = 15 - (numerosPares[0] + 5);
          valores[0][0] = valorUltimaCasilla;
          eliminaNumeroPar(numerosPares.indexOf(numerosPares[0]));
          eliminaNumeroPar(numerosPares.indexOf(valorUltimaCasilla));
        }
      }
    }
  }

  function validaFilas() {
    let sumaFila = 0;
    let valorFaltante = 0;

    // valida casilla 2
    sumaFila =
      valorCasillasImpares[0] + valorCasillasPares[0] + valorCasillasImpares[1];

    if (sumaFila != 15) {
      valorFaltante = 15 - (valorCasillasImpares[0] + valorCasillasImpares[1]);
      valores[0][1] = valorFaltante;
      valorCasillasPares[0] = valorFaltante;
      eliminaNumeroImpar(numerosImpares.indexOf(valorFaltante));
    } else {
      eliminaNumeroImpar(numerosImpares.indexOf(valorCasillasPares[0]));
    }

    // valida casilla 8
    sumaFila =
      valorCasillasImpares[3] + valorCasillasPares[3] + valorCasillasImpares[4];

    if (sumaFila != 15) {
      valorFaltante = 15 - (valorCasillasImpares[3] + valorCasillasImpares[4]);
      valores[2][1] = valorFaltante;
      valorCasillasPares[3] = valorFaltante;
      eliminaNumeroImpar(numerosImpares.indexOf(valorFaltante));
    } else {
      eliminaNumeroImpar(numerosImpares.indexOf(valorCasillasPares[3]));
    }
  
    // valida casilla 4
    sumaFila =
      valorCasillasImpares[0] + valorCasillasPares[1] + valorCasillasImpares[3];

    if (sumaFila != 15) {
      valorFaltante = 15 - (valorCasillasImpares[0] + valorCasillasImpares[3]);
      valores[1][0] = valorFaltante;
      valorCasillasPares[1] = valorFaltante;
      eliminaNumeroImpar(numerosImpares.indexOf(valorFaltante));
    } else {
      eliminaNumeroImpar(numerosImpares.indexOf(valorCasillasPares[1]));
    }

    // valida casilla 6
    sumaFila =
      valorCasillasImpares[1] + valorCasillasPares[2] + valorCasillasImpares[4];

    if (sumaFila != 15) {
      valorFaltante = 15 - (valorCasillasImpares[1] + valorCasillasImpares[4]);
      valores[1][2] = valorFaltante;
      valorCasillasPares[2] = valorFaltante;
      eliminaNumeroImpar(numerosImpares.indexOf(valorFaltante));
    } else {
      eliminaNumeroImpar(numerosImpares.indexOf(valorCasillasPares[2]));
    }
  }

  function eliminaNumeroImpar(index) {
    if (index >= 0) {
      numerosImpares.splice(index, 1);
    }
  }

  function eliminaNumeroPar(index) {
    if (index >= 0) {
      numerosPares.splice(index, 1);
    }
  }

  function validarNumeroPrimo(numero) {
    return numero % 2 == 0;
  }

  return valores;
};

console.log(cuadroMagico([ [ 4, 9, 2] ,[ 3, 5, 7] , [ 8, 1, 5] ]));
