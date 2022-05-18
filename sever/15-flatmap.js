const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
]

const rta = users.map(user => user.attributes).flat();
console.log(rta)

const rta2 = users.flatMap(user => user.attributes);
console.log(rta)

//reto
const arrayNuevo = [];
const myFlat = (array) => {
    if(Array.isArray(array)){
        for (const iterator of array) {
            myFlat(iterator);
        }
    } else {
        arrayNuevo.push(array);
    }
}//no me funciona flat por eso pongo mi propio flat xd

const calendars = {
    primaryCalendar: [
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
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

// const starDates = calendars.primaryCalendar.map(calendar => calendar.startDate)
// const starDates2 = calendars.secondaryCalendar.map(calendar => calendar.startDate)

// starDates.push(starDates2);
// myFlat(starDates);
// console.log(arrayNuevo);

//con ayuda del profe descubri pasar un objeto a array

const starDatesChido = Object.values(calendars).flat();
//Object.values regresa los nombre de los atributos mientras que values los valores de los atributos :))))))
console.log(starDatesChido);
const rta3 = starDatesChido.flatMap(calendar => calendar.startDate);
// const rta4 = starDatesChido.map(calendar => calendar.);
console.log(rta3);