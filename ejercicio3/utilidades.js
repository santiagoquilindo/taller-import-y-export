// utilidades.js
export function categoriaIMC(imc) {
    let categoria = imc < 18.5? "Bajo peso": imc >= 18.5 && imc <= 24.9? "Normal": imc >= 25 && imc <= 29.9? "Sobrepeso": "Obesidad";
    
    return categoria;
}
