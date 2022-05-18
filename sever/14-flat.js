const matriz = [
    [1,2,3], 
    [4,5, [1,2,3],6],
    [7,8,9],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j< array.length; j++) {
        const element = array[j];
        newArray.push(element);
    }
}

// console.log(newArray);

const rta = matriz.flat(2); //debes indicarle cuantos arrays hay adentro para que aplane todo, o solo algunos niveles
console.log(rta);

//reto
const matriz2 = [
    [1,2,3,[1,2]], 
    [4,[1,8,17,[9,3,6]],5,6],
    [7,8,9],
];
const arrayNuevo = [];
const myFlat = (array) => {
    if(Array.isArray(array)){
        for (const iterator of array) {
            myFlat(iterator);
        }
    } else {
        arrayNuevo.push(array);
    }
}

myFlat(matriz2);
console.log(arrayNuevo)