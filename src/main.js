import { calculaTicket, desgloseIVA } from "./calculaTicket.js";
import { productos, resultadoTotalTicket } from "./calculaTicket.helper.js";
import { ponerProductosEnPantalla, ponerTotales } from "./ui.js";

console.log(calculaTicket(productos));
console.log(desgloseIVA(productos));
ponerProductosEnPantalla(calculaTicket(productos));

const resultadoLineaTicket = calculaTicket(productos);

const totalPrecioSinIva = resultadoLineaTicket.reduce((total, linea) => 
    total + linea.precioSinIva * linea.cantidad
, 0);
const totalPrecioConIva = resultadoLineaTicket.reduce((total, linea) => 
    total + linea.precioConIva * linea.cantidad
, 0);

resultadoTotalTicket.totalSinIva = Number(totalPrecioSinIva.toFixed(2));
resultadoTotalTicket.totalConIva = Number(totalPrecioConIva.toFixed(2));

console.log(resultadoTotalTicket);

ponerTotales(resultadoTotalTicket);
