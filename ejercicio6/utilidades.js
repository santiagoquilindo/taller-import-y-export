export function cotizaPres(salario, puntajeCredito) { 
    if (salario > 30000 && puntajeCredito > 650) {
        return "si se puede";
    } else {
        return "No se puede";
    }
}
