const elements = ['fire', 'air', 'water']

let rtaFinal = ''
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal+ element + separator;
}

console.log(rtaFinal);

const rta = elements.join('--') //imprime los elementos del array pero pone los argumentos entre los elementos
console.log(rta)

const title = 'Curso de manipulación de arrays';
console.log(title.split(' ')); //cada palabra generara un elemento de un array porque le indicamos que lo que lo sepan son los espacios

const titleFinal = title.split(' ').join('-').toLowerCase();
console.log(titleFinal);