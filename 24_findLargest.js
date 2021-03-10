console.log("----------findLargest---------");

function findLargest(numbers) {
  let z = [];
  for (let x of numbers) {
    z.push(parseInt(x));
  }

  z.sort(function (a, b) {
    return b - a;
  });
  return z[0];
}

console.log(findLargest([1, -28, 88, -200, 7, 88]));
