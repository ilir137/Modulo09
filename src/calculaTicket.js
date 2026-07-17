import { asignarIva, resultadoTotalTicket } from "./calculaTicket.helper.js";

export const calculaLineaTicket = (lineasTicket) => {
    const resultadoLineaTicket = [];
    var iva = 0.21;
    var precioConIva;
    var totalIva = 0;
    for (let i = 0; i < lineasTicket.length; i++) {
        iva = asignarIva(lineasTicket[i].producto.tipoIva);
        precioConIva = lineasTicket[i].producto.precio * (1+iva);
        totalIva += lineasTicket[i].producto.precio * iva * lineasTicket[i].cantidad;
        resultadoLineaTicket.push({
            nombre: lineasTicket[i].producto.nombre,
            cantidad: lineasTicket[i].cantidad,
            precioSinIva: lineasTicket[i].producto.precio,
            tipoIva: lineasTicket[i].producto.tipoIva,
            precioConIva: precioConIva
        });
    }
    resultadoTotalTicket.totalIva = Number(totalIva.toFixed(2));
    return resultadoLineaTicket;
};

export function desgloseIVA(lineasTicket){
    const totalPorTipoIva = [];
    var iva = 0.21;
    var precioConIva;
    var totalIva = 0;
    for (let i = 0; i < lineasTicket.length; i++) {
        iva = asignarIva(lineasTicket[i].producto.tipoIva);
        precioConIva = lineasTicket[i].producto.precio * (1+iva);
        const precioConIvaPorCantidad = lineasTicket[i].producto.precio * iva * lineasTicket[i].cantidad;
        totalIva += precioConIvaPorCantidad;
        totalPorTipoIva.push({
            tipoIva: lineasTicket[i].producto.tipoIva,
            cuantia: Number(precioConIvaPorCantidad.toFixed(2))
        })
    }
    return totalPorTipoIva;
}
