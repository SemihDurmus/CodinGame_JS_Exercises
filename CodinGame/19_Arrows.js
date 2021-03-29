console.log("---------detect the tendency to right/left/down?----------");

const s = [
  "...V.......",
  "...O.......",
  "....O......",
  ".....O.....",
  "...O.......",
  "..V........",
  "...V.......",
  "...O.......",
];

let prev = s[0].indexOf("V") !== -1 ? s[0].indexOf("V") : s[0].indexOf("O");
let next = 0;

for (let i = 1; i < s.length; i++) {
  next = s[i].indexOf("V") !== -1 ? s[i].indexOf("V") : s[i].indexOf("O");
  //   console.log(i);
  //   console.log({ prev });
  //   console.log({ next });
  if (prev === next) {
    console.log("Down");
  } else if (prev > next) {
    console.log("Left");
  } else {
    console.log("Right");
  }
  prev = next;
}
