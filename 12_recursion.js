console.log("-------RECURSION-------------");

//FIND THE POSSIBLE LETTER COMBINATIONS IN A STRING
// function numPermutaions(letter) {
//   let total;
//   for (let i = 1; i <= letter.length; i++) {
//     if (total === undefined) {
//       total = i;
//       continue;
//     }
//     total *= i;
//   }
//   return total;
// }

// console.log(numPermutaions("hello"));

//------------Number of permutaions in a letter-------

function numPermutaions(letter) {
  if (letter.length === 1) return 1;
  else {
    return letter.length * numPermutaions(letter.slice(1));
  }
}
console.log("permutations of hello : ", numPermutaions("hello"));

//------------Factorial----------------

function factorial(nr) {
  if (nr === 1 || nr === 0) {
    return 1;
  } else {
    return nr * factorial(nr - 1);
  }
}

console.log("Factorial of 4 is : ", factorial(4));

//------------Find sum number value of digits----------------

function sumOfDigits(nu) {
  if (nu === 0) return 0;
  else {
    return (nu % 10) + sumOfDigits(Math.floor(nu / 10));
  }
}

console.log("sumOfDigits : ", sumOfDigits(324));
