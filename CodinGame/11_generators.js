console.log("--------GENERATORS-------------");

// function* mygenerator() {
//     yield "value1"
//     yield "value2"
// }

// const mygenerator();
// mygenerator.next(); //{value: "value1", done:false}
// mygenerator.next(); //{value: "value2", done:false}
// mygenerator.next(); //{value: null, done:true}

function* getStop() {
  yield "Newburgh";
  yield "Yorker";
  yield "Harlem";
  yield "Bronx";
  yield "Grand Central";
}

const nyTrainLine = getStop();
const nextButton = document.querySelector("#next");

nextButton.addEventListener("click", () => {
  let currStop = nyTrainLine.next();
  if (currStop.done) {
    console.log("We made it!!!!");
    nextButton.setAttribute("disabled", true);
  } else console.log(currStop.value);
});
