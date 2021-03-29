let promiseToCleanTheRoom = new Promise((resolve, reject) => {
  let isClean = true;

  if (isClean) {
    resolve("clean");
  } else {
    reject("not clean");
  }
});

//if the process takes time it's better to use .then() and .catch(). Both take callback functions as argument

promiseToCleanTheRoom
  .then((msgFromResolve) => {
    console.log("The room is", msgFromResolve);
  })
  .catch((msgFromReject) => {
    console.log("The room is", msgFromReject);
  });

//-----------SECOND EXAMPLE-------------------------------

let wakeUp = () => {
  return new Promise((resolve, reject) => {
    resolve("I woke up");
  });
};

let takeShower = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " I took shower");
  });
};

let getDressed = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " I got dressed");
  });
};

//when one function should only work if another function is done
wakeUp()
  .then((result) => {
    return takeShower(result);
  })
  .then((result) => {
    return getDressed(result);
  })
  .then((result) => {
    console.log(result, "Now I am ready to go out");
  });

//when function do not have to wait each other for executions
Promise.all([wakeUp(), takeShower(), getDressed()]).then(() => {
  console.log("All done");
});

//when we want one of the functions to be executed
Promise.race([wakeUp(), takeShower(), getDressed()]).then(() => {
  console.log("One is done");
});

//-----------THIRD EXAMPLE-------------------------------
//I want to use Javascript Promises to calculate the areas of various geometrical shapes.
// Square of side a : Area = a2(asqure)
// Rectangle of length 'I' and width ‘w’: Area = w x I
// Circle of radius ‘r’: Area = Pi x r2 (rsquare)
// Triangle of base ‘b’ and height ‘h’: Area = 0.5 x b x h

let calculateArea = (shape, values) => {
  return new Promise((resolve, reject) => {
    switch (shape) {
      case "square":
        console.log("It's a square with a=" + values[0]);
        resolve(values[0] * values[0]);
        break;
      case "rectangle":
        console.log(
          "It's a rectangle with a=" + values[0] + " and b=" + values[1]
        );
        resolve(values[0] * values[1]);
        break;
      case "circle":
        console.log("It's a circle with r=" + values[0]);
        resolve(values[0] * values[0] * 3.14);
        break;
      case "triangle":
        console.log(
          "It's a triangle with b=" + values[0] + " and h=" + values[1]
        );
        resolve(0.5 * values[0] * values[1]);
        break;
      default:
        reject([-1]);
        break;
    }
  });
};

let getAreas = (shapes, values_arr) => {
  let areas_array = [];
  for (let i = 0; i < shapes.length; i++) {
    calculateArea(shapes[i], values_arr[i])
      .then((area) => {
        areas_array.push(area);
      })
      .catch((error) => {
        return reject(error);
      });
  }
  console.log(areas_array);
};

let shapes = ["square", "rectangle", "circle", "triangle"];
let values_arr = [[2], [3, 4], [5], [2, 4]];
getAreas(shapes, values_arr);
