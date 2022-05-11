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
  ]
console.log(orders)

const totales = orders.map(item => item.total)
console.log(totales)

const impuestos = orders.map(item => {
    return {
        ...item, //asi oders se mantiene inmutable
        tax: .19
    }
})

console.log(impuestos)
console.log(orders)