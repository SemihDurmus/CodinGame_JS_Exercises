console.log("----------------FILTER-------------------");

const menu = [
  {
    name: "Beef",
    isVeg: false,
  },
  {
    name: "Meat",
    isVeg: false,
  },
  {
    name: "Lettuce",
    isVeg: true,
  },
  {
    name: "Tomato",
    isVeg: true,
  },
];

function vegetarianMenu(menu) {
  const menuNode = document.querySelector("#menu");
  console.log(menuNode);
  const vegOptions = menu.filter((item) => item.isVeg === true);
  console.log(menu);
  console.log(vegOptions);
  vegOptions.forEach((item) => {
    let dish = document.createElement("li");
    dish.textContent = item.name;
    console.log(dish);
    menuNode.appendChild(dish);
  });
}

vegetarianMenu(menu);
