console.log("-------ASYNC-------------");

const baseURL = "https://randomuser.me/api/?results=5";
const timeline = document.querySelector("#timeline");
//Display 5 users

const getUsers = async () => {
  let people = await fetch(baseURL);
  let data = await people.json();
  console.log(data);
  data.results.forEach((item) => {
    let image = document.createElement("img");
    image.setAttribute("src", item.picture.thumbnail);
    timeline.appendChild(image);
  });
};

//getUsers();
