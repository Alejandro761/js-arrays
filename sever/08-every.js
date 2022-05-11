const numbers = [1,2,3,4]

let rta = true;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    if(element <= 2){
        rta = false;
    }
}
console.log(rta);

const rta2 = numbers.every(item => item>= 2 ) //every evalua que todos deben cumplir la condición
console.log(rta2)

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 15,
    },
  ];

const teamMenor = team.every(persona => persona.age <= 15)
console.log(teamMenor)