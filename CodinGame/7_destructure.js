console.log("----------DESTRUCTURING, SPREAD OP------------------");

// fist element in the array is teacher,
// if there is an assistent (ifAssistent == true)
// then second element is assistent and the rest are students
// ifAssistent is false rest are students

function getStudents(classroom) {
  let { isAssistant, classList } = classroom;
  let teacher, assistent, students;

  if (isAssistant) {
    [teacher, assistent, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

const classroom1 = {
  isAssistant: false,
  classList: ["a", "b", "c", "d", "e", "f"],
};
const classroom2 = {
  isAssistant: true,
  classList: ["a", "b", "c", "d", "e", "f"],
};

console.log(getStudents(classroom1));
console.log(getStudents(classroom2));
