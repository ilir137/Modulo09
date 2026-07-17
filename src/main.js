import { calculaLineaTicket, desgloseIVA } from "./calculaTicket.js";
import { productos, calculaSubtotalProductos, calculaTotalIva } from "./calculaTicket.helper.js";
import { ponerProductosEnPantalla, ponerTotales } from "./ui.js";

const calculaTicket = (lineasTicket) => {
    const subtotal = calculaSubtotalProductos(lineasTicket);
    const iva = calculaTotalIva(lineasTicket);
    const lineas = calculaLineaTicket(lineasTicket);
    const tiposIVA = desgloseIVA(lineasTicket);

    return {
        lineas: lineas,
        total: {
            totalSinIva: subtotal,
            totalConIva: subtotal + iva,
            totalIva: iva
        },
        desgloseIVA: tiposIVA
    }
}


ponerProductosEnPantalla(calculaTicket(productos));
ponerTotales(calculaTicket(productos).total);

console.log(calculaTicket(productos));
