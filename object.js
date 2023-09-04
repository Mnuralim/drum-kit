// const student1 = {
//   name: "wahyu",
//   age: 28,
//   programmingLanguage: ["PHP,C#,Javascript"],
// };

// const student2 = {
//   name: "wahyu",
//   age: 28,
//   programmingLanguage: ["PHP,C#,Javascript"],
// };

// const student3 = {
//   name: "wahyu",
//   age: 28,
//   programmingLanguage: ["PHP,C#,Javascript"],
// };

//constructor function
function StudentFSW(name, age, programmingLanguage) {
  this.name = name;
  (this.age = age), (this.programmingLanguage = programmingLanguage);
}

//inisialisasi object
const student1 = new StudentFSW("Wahyu", 20, ["PHP"]);

console.log({ student1 });
