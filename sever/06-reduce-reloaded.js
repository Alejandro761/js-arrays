const items = [1,3,2,3,4,2,4,3]

const acum = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else{
        obj[item] = obj[item]+1 
    }
    return obj;
}, {}) //estado inicial es un objeto {} 

console.log(acum)

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

const levels = data.map(item => item.level).reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1
    } else {
        obj[item]++
    }
    return obj
}, []) //estado inicial es un array [] 

console.log(levels);

//ejercicio
const numeros = [1,4,8,9,2,3,4,7,5,8,4,5,10,6,7,8,9,10]

const rangos = numeros.reduce((obj, item) => {
    if(item >= 1 && item<= 5){
        obj['1-5']++
    }
    if(item >= 6 && item<= 8){
        obj['6-8']++
    }
    if(item >= 9 && item<= 10){
        obj['9-10']++
    }
    return obj
}, { //estado inicial sera un objeto con los rangos en 0
    '1-5': 0,
    '6-8': 0,
    '9-10': 0
})

console.log(rangos);