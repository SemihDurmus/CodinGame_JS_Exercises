console.log("---------CLOSURE------------------");

// a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

//---------------------------

// function makeCyan() {
//   document.querySelector("#cont").style.background = "cyan";
// }

// function makeYellow() {
//   document.querySelector("#cont").style.background = "yellow";
// }

// document.querySelector("#cyan").addEventListener("click", makeCyan);
// document.querySelector("#yellow").addEventListener("click", makeYellow);

//---------------------------

function changeColor(color) {
  return function () {
    document.querySelector("#cont").style.background = color;
  };
}

const bgCyan = changeColor("cyan");
const bgYellow = changeColor("yellow");

document.querySelector("#cyan").addEventListener("click", bgCyan);
document.querySelector("#yellow").addEventListener("click", bgYellow);
