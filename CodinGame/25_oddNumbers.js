let n = 9;
new Array(n + (n % 2))
  .fill(0)
  .map((n, i) => i)
  .filter((n) => n % 2)
  .forEach((n) => console.log(n));
