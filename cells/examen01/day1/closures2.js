const inicio = () => {
    //Propiedad privada
    let valor = 0;

    //Metodo privado
    function cambiarValor(num) {
        valor += num;
    }

    return {
        incrementar: () => {
            cambiarValor(3);
        },
        disminuir: () => {
            cambiarValor(-3);
        },
        mostrarValor: () => {
            return valor;
        }
    }
}

let obj1 = inicio();

obj1.incrementar();
obj1.incrementar();

console.log(obj1.mostrarValor());

obj1.disminuir();

console.log(obj1.mostrarValor());