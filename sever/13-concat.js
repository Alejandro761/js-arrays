const elements = [1,1,2,2];
const othersElements = [3,3,4];

const newArray = [...elements]; //es mejor de esta manera ya que no copia la referencia de memoria, y asi al modificar newArray, elements quedara en su estado original
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log(newArray);

const rta = elements.concat(othersElements);
console.log(rta);
const rta2 = [...elements, ...othersElements]; //otra manera de concatenar arrays
console.log(rta2)

const rta3 = [...elements, 'hola'];
console.log(rta3) 

const rta4 = [...elements, ...'hola']; //si incluimos un string con spread operation entonces separara el string en un array, es decir cada letra sera un elemento del nuevo array
console.log(rta4)

elements.push(othersElements); //esto pone el array de others como un elemento mas de elements
console.log(elements);