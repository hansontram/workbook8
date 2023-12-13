document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const student = document.getElementById("student");
  const instructor = document.getElementById("instructor");
  const saveUserName = document.getElementById("saveUserName")

  console.log(name, student, instructor, saveUserName);

  saveUserName.addEventListener("click", () => {
    sessionStorage.name = name.value;
    sessionStorage.student = student.checked;
    sessionStorage.instructor = instructor.checked;
    console.log(sessionStorage.name = name.value)
    location.href = "info.html";
  });
});
