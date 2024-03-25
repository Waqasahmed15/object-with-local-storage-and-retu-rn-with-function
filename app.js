// var students = {
//   name1: "waqas",
//   rollNumber: 415,
//   course: "html",
//   institute: "smit",
// };

function addStudent() {
  return {
    name1: prompt("enter your name"),
    rollNumber: parseInt(prompt("enter your roll number")),
    course: prompt("enter your course"),
    institute: prompt("enter your institute"),
  };
}
var showStudent = [addStudent()];

console.log(showStudent);
