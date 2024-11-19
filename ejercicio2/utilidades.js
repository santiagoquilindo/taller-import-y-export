export function calcularDescuento(precio) {

    let descuento = precio > 1000 ? precio - (precio * 0.2) : precio >= 500 && precio< 1000? precio - (precio * 0.1) : precio;
    
    return descuento;
}
