// var students = {
//   name1: "waqas",
//   rollNumber: 415,
//   course: "html",
//   institute: "smit",
// };
var showStudent = [];
function addStudent() {
  var std = {
    name1: prompt("enter your name"),
    rollNumber: parseInt(prompt("enter your roll number")),
    course: prompt("enter your course"),
    institute: prompt("enter your institute"),
  };
  showStudent.push(std);
  console.log(showStudent);
}
