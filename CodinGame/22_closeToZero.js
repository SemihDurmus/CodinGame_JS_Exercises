console.log("---------CLOSE TO ZERO---------");

function computeClosestToZero(ts) {
  let closest = Math.abs(ts[0]);
  let next = 0;
  for (let t = 0; t < ts.length - 1; t++) {
    next = Math.abs(ts[t]);
    if (next < closest) {
      closest = next;
    }
  }

  for (let number of ts) {
    if (Math.abs(number) === closest && number > closest) {
      closest = number;
    }
  }

  return closest;
}

console.log(computeClosestToZero([-15, -7, -14]));
