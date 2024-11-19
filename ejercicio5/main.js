import { siBisiesto } from './utilidades.js';

let anos = [1900, 2000, 2024, 2023, 2100];
anos.forEach(ano => {
    let resultado = siBisiesto(ano);
    console.log(`año: ${ano} -> ¿Es bisiesto? ${resultado}`);
});
