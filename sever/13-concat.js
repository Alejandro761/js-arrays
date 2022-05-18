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