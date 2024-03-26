// var students = {
//   name1: "waqas",
//   rollNumber: 415,
//   course: "html",
//   institute: "smit",
// };
var showStudent = [];
var prstudent = localStorage.getItem("student");
console.log(JSON.parse(prstudent));
function addStudent() {
  var std = {
    name1: prompt("enter your name"),
    rollNumber: parseInt(prompt("enter your roll number")),
    course: prompt("enter your course"),
    institute: prompt("enter your institute"),
  };
  showStudent.push(std);
  localStorage.setItem("student", JSON.stringify(showStudent));
}
