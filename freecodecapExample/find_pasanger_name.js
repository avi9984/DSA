const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
//   1: How to Get Passengers' Names

let passengerNames=[];
// for(let i=0; i<passengers.length; i++){
//     passengerName.push(passengers[i].passengerName)
// }
// console.log(passengerName)

passengers.forEach((passenger)=>{
    passengerNames.push(passenger.passengerName)
})
// console.log(passengerNames)



// 2: How to Get Vegetarian/Vegan Singers
for (let i = 0; i < passengers.length; i++) {
    if(passengers[i].isVegetarianOrVegan==true) {
    passengerNames.push(passengers[i].passengerName)
    }
}
console.log(passengerNames);