const spanProductos = document.getElementById("spanProductos");
const spanTotales = document.getElementById("spanTotales");

export function ponerProductosEnPantalla(listaTicket){
    for (let i = 0; i < listaTicket.length; i++) {
        spanProductos.innerHTML += `${listaTicket[i].nombre}:
        <br>
        Precio sin IVA: ${listaTicket[i].precioSinIva} €, Tipo de IVA: ${listaTicket[i].tipoIva}, Precio con IVA: ${listaTicket[i].precioConIva} €
        <br>
        Cantidad: ${listaTicket[i].cantidad}
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