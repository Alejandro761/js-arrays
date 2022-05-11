const letras = ['a', 'b', 'c'];

const newArray = [];
for (let index = 0; index < letras.length; index++) {
    const element = letras[index];
    newArray.push(element + '++')
}

console.log( letras)
console.log(newArray)

const newArray2 = letras.map(elemento => elemento + '++')
console.log(newArray2)