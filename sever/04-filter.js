const words = ['consola', 'game pass', 'star wars', 'mexico']

const newArray = []

for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length <=7) {
        newArray.push(element);
    }
}

console.log(words)
console.log(newArray)

const newArrayFilter = words.filter( item => item.length <= 7)
console.log(newArrayFilter)

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Valencia",
        total: 204,
        delivered: false,
      }
  ]

const delivereds = orders.filter(item => item.delivered && item.total >= 100)
console.log(delivereds)

const namesTrue = orders.filter(item => item.delivered && item.total >= 100).map(item => item.customerName); //para que solo hagamos un arrelog con sus nombres, asies podemos combinarlos gg

console.log(namesTrue);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query) //retorna el que cumpla está condición 
    })
}

console.log(search('Vale'))