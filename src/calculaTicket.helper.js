export const productos = [
    {
        producto: {
            nombre: "Legumbres",
            precio: 2,
            tipoIva: "general",
        },
        cantidad: 2,
    },
    {
        producto: {
            nombre: "Perfume",
            precio: 20,
            tipoIva: "general",
        },
        cantidad: 3,
    },
    {
        producto: {
            nombre: "Leche",
            precio: 1,
            tipoIva: "superreducidoC",
        },
        cantidad: 6,
    },
    {
        producto: {
            nombre: "Lasaña",
            precio: 5,
            tipoIva: "superreducidoA",
        },
        cantidad: 1,
    },
];

/*
*****************************
*                           *
*       Tipos de IVA        *
*                           *
*****************************

General	          21%
Reducido	      10%
Superreducido A	   5%
Superreducido B	   4%
Superreducido C	   0%
Sin IVA	           0%
*/

/*
interface ResultadoLineaTicket {
    nombre: string;
    cantidad: number;
    precionSinIva: number;
    tipoIva: TipoIva;
    precioConIva: number;
}
*/

export const resultadoTotalTicket = {
    totalSinIva: undefined,
    totalConIva: undefined,
    totalIva: undefined,
}

export const totalPorTipoIva = {
    tipoIva: undefined,
    cuantia : undefined,
}

export function asignarIva(tipoIva){
    var iva = 0.21;
    switch (tipoIva) {
        case "general":
            iva = 0.21;
            break;
        case "reducido":
            iva = 0.1;
            break;
        case "superreducidoA":
            iva = 0.05;
            break;
        case "superreducidoB":
            iva = 0.04;
            break;
        case "superreducidoC":
            iva = 0;
            break;
        case "sinIva":
            iva = 0;
            break;
        default:
            iva = 0.21;
            break;
    }
    return iva;
}