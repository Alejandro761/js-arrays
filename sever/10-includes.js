const pets = ['cat', 'dog', 'turtle'];

let includeInArray = false;

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element == 'dog') {
        includeInArray = true;
        break
    }
}

console.log(includeInArray);

const includeInArray2 = pets.includes('turtle') //busca si se encuentra
console.log(includeInArray2)