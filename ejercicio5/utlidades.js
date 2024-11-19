// Exportar la función siBisiesto
export function siBisiesto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return "Si es";
    } else {
        return "No es";
    }
}
