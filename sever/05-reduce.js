const totales = [1,2,3,4]

let suma = 0;

for (let index = 0; index < totales.length; index++) {
    const element = totales[index];
    suma = suma + element;
}

// console.log(suma);
// el primer parametro es el arrow function, en el primer parametro del arrow va el acumulador y el segundo es el elemento del array, despues de la flecha va la operación que hara acumulador osea esta diciendo que acumulador = (lo que pongas ahí)
//el seugndo parametro es el estado inicial del acumulador, en este caso queremos iniciarlo en 0 pero puedes ponerle cualquier numero o varibale con numero asignado
suma = 0
const sumaTotales = totales.reduce((acumulador, item) => /* acum= */acumulador + item, suma )
const sumaTotales2 = totales.reduce((acumulador, item) => acumulador - item, 25)

console.log(sumaTotales)
console.log(sumaTotales2)