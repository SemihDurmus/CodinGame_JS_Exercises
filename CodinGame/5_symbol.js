console.log("------------SYMBOL-------------------");

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "John",
  [password]: "12345",
  age: 50,
};

console.log(user.username);
console.log(user.password);
console.log(user.age);
