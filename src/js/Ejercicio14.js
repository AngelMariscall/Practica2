let precio = 1000;
let porcentaje = 10;

function calcularDescuento() {
    let descuento = (precio * porcentaje) / 100;
    let precioFinal = precio - descuento;

    console.log(`Costo real: $ ${precio.toFixed(2)}`);
    console.log(`Valor del descuento: $ ${descuento.toFixed(2)}`);
    console.log(`Costo total a pagar: $ ${precioFinal.toFixed(2)}`);
}

calcularDescuento();