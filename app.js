var students = {
  name1: "waqas",
  rollNumber: 415,
  course: "html",
  institute: "smit",
};

function addStudent(name1, rollNumber, course, institute) {
  return {
    name1: name1,
    rollNumber: rollNumber,
    course: course,
    institute: institute,
  };
}
var showStudent = [
  addStudent("waqas", 42, "js", "smit"),
  addStudent("munir", 45, "css", "smit"),
];
console.log(showStudent);
