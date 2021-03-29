console.log("--------------Number Times Dots----------------");

// input [1,2,3,4,5]
// output 1.2..3...4....5

const firstArr = ["1", "2", "3", "4", "5"];
const arrN = [];

for (let i = 0; i < firstArr.length; i++) {
  arrN.push(parseInt(firstArr[i]));
}

let answ = "";

for (let i = 0; i < arrN.length - 1; i++) {
  answ += arrN[i] + ".".repeat(arrN[i]);
}

console.log(answ + arrN.slice(-1));
