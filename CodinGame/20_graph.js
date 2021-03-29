console.log("---------GRAPH----------");

const NL = 6; //nr of lines
let lines = ["..#...", "..#..#", "..#..#", "..##.#", ".#####", "######"];

const NC = 5; //amount of new columns to create
var heights = [3, 4, 6, 3, 1];

//console.log(heights);

for (let i of heights) {
  for (let r in lines) {
    let ind = NL - r;

    if (ind <= i) lines[r] += "#";
    else lines[r] += ".";
  }
}
console.log(lines.join("\n"));
