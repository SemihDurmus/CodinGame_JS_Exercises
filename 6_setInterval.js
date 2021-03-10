console.log("-----------SETINTERVAL------------------");

const clockNode = document.querySelector("#clock");

function clock() {
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    clockNode.textContent = tick;
  }, 1000);
}
clock();
