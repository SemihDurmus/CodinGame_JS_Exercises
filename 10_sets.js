console.log("--------SETS----------------");

const v1 = ["pizza", "pasta"];
const v2 = ["pizza", "calzones"];
const v3 = ["lobster", "pasta"];
const v4 = ["pasta", "calzones"];

const combinedMenu = [v1, v2, v3, v4];

function makeSet(menus) {
  let flatMenus = menus.flat();
  let eventualMenu = new Set();

  flatMenus.forEach((item) => {
    eventualMenu.add(item);
  });

  const menuNode = document.querySelector("#menulist");
  for (const element of eventualMenu) {
    let foodNode = document.createElement("li");
    foodNode.innerText = element;
    menuNode.appendChild(foodNode);
  }
}

makeSet(combinedMenu);
