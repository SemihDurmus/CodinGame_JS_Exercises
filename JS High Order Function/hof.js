//high order function returns another function

const createAdder = (addBy) => (number) => number + addBy;

const add3 = createAdder(3);
console.log(add3);
console.log(add3(7));
