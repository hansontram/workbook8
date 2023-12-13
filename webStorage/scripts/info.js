document.addEventListener("DOMContentLoaded", () => {
    const name = sessionStorage.getItem("name");
    const isStudent = sessionStorage.getItem("student") === "true";

    const welcomeMessage = document.getElementById("welcomeMessage");

    if (isStudent) {
        welcomeMessage.textContent = `Welcome Student, ${name}!`;
        // Add additional student-related content or logic if needed
    } else {
        welcomeMessage.textContent = `Welcome Instructor, ${name}!`;
        // Add additional instructor-related content or logic if needed
    }
});
