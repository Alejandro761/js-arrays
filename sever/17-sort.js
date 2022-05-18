const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); //lo ordena en orden ascii
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers);

numbers.sort((a,b) => a-b); //asi lo ordena de forma numerica, menor a mayor
console.log(numbers);

numbers.sort((a,b) => b-a); //mayor a menor
console.log(numbers);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort( (a,b) => a.total - b.total);
console.log(orders);

//reto

const calendars = [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 3",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      }
];

calendars.sort((a,b) => a.startDate - b.startDate);
console.log(calendars);