const calularFactorial = (numero) => {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
};

console.log(calularFactorial(8));
