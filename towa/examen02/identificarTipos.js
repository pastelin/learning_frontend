const identificarTipo = (valor) => {

    let tipo = typeof valor;
    let resultado;

    if (tipo === 'string') {
        resultado = valor.length;
    }
    else if (tipo === 'number') {
        resultado = valor * 10;
    } 
    else if (tipo === 'boolean') {
        resultado = (valor) ? 1 : 0;
    }

    return resultado;

};

console.log(identificarTipo());
