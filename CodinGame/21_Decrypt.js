console.log("------------DECRYPT----------");
//input S    M     L
//        I     P     E
// output-> simple
const dec = "CMLXOPE";
const dec1 = "SMLIPE";

let answr = "";

let p = Math.ceil(dec.length / 2);
console.log(p);

for (let i = 0; i <= Math.floor(dec.length / 2) - 1; i++) {
  answr += dec[i] + dec[i + p];
}

if (dec.length % 2 === 1) {
  answr += dec[p - 1];
}

console.log(answr);
