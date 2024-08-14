const calcularTotalVuelo = (dias, km) => {
    let precioKm = 13.5;
    const numeroBilletes = 2;
    const descuento = .30;
    let total;

    if (dias > 7 && km > 800) {
        let subTotal = (precioKm * km);
        let calculaDescuento = subTotal * descuento;
        total = (subTotal - calculaDescuento) * 2;
    }
    else {
        total = (precioKm * km) * numeroBilletes;
    }

    return Math.round(total);
}

console.log(calcularTotalVuelo(8, 801));