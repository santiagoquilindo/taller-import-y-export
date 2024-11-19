// utilidades.js
export function nivelRiesgo(edad, enfermedadesPrevias) {
    let riesgo = edad > 60 || enfermedadesPrevias? "Alto riesgo": edad >= 40 && edad <= 60 && enfermedadesPrevias? "Riesgo moderado": "Bajo riesgo";
    
    return riesgo;
}
