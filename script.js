document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});
document.getElementById("hoverText").addEventListener("mouseover", () => {
  document.getElementById("hoverText").textContent = "You hovered over me!";
});
document.getElementById("hoverText").addEventListener("mouseout", () => {
  document.getElementById("hoverText").textContent = "Hover over me!";
});
document.getElementById("typingInput").addEventListener("keyup", (e) => {
  document.getElementById("typingOutput").textContent = "You typed: " + e.target.value;
});
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  document.getElementById("count").textContent = count;
});
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }
  const password = document.getElementById("password").value.trim();
  if (password.length < 6 || !/\d/.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters and contain a number.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }
  if (valid) {
    document.getElementById("formMessage").textContent = "Form submitted successfully 🎉";
  } else {
    document.getElementById("formMessage").textContent = "Please fix errors above.";
  }
});
