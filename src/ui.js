import { spanProductos, spanTotales } from "./modelo.js";

export function ponerProductosEnPantalla(listaTicket){
    for (let i = 0; i < listaTicket.lineas.length; i++) {
        spanProductos.innerHTML += `${listaTicket.lineas[i].nombre}:
        <br>
        Precio sin IVA: ${listaTicket.lineas[i].precioSinIva} €, Tipo de IVA: ${listaTicket.lineas[i].tipoIva}, Precio con IVA: ${listaTicket.lineas[i].precioConIva} €
        <br>
        Cantidad: ${listaTicket.lineas[i].cantidad}
        <br><br>`;
    }
}

export function ponerTotales(resultadoTotalTicket){
    spanTotales.innerHTML= `Total sin IVA: ${resultadoTotalTicket.totalSinIva} €
    <br>
    Total IVA: ${resultadoTotalTicket.totalIva} €
    <br>
    Total con IVA: ${resultadoTotalTicket.totalConIva} €
    <br><br>`; 
}
