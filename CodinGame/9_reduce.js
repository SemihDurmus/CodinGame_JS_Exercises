console.log("---------REDUCE-----------------");

const pricePerCoffee = 1.25;
const nrOfCoffeesArr = [2, 3, 1, 5];

function totalPrice(arr) {
  let sum = arr.reduce((total, item) => (total += item));
  return "Total value is $" + sum * pricePerCoffee;
}

console.log(totalPrice(nrOfCoffeesArr));

//i.e. if you have to pay $10 in advance just for entering the cafe

//arr.reduce(((accumulator, currentValue) => accumulator + currentValue, basevalue))

function totalPrice2(arr) {
  let sum = arr.reduce((total, item) => (total += item), 10);
  return "Total value is $" + sum * pricePerCoffee;
}

console.log(totalPrice2(nrOfCoffeesArr));
