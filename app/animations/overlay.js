// Overlay Variables

const overlay = document.getElementById("overlay");
const loginButton = document.querySelector(".nav-links__login");
const signupButton = document.querySelector(".nav-links__signup");

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

/* Opening the overlay */

function openForm(element) {
  element.style.display = "flex";
  overlay.style.display = "flex";

  setTimeout(() => {
    element.style.top = "50%";
    element.style.transform = "translateY(-50%)";
  }, 500);
}

function closeForm(element) {
  element.style.top = "150%";

  setTimeout(() => {
    element.style.display = "none";
    overlay.style.display = "none";
  }, 1000);
}

signupButton.addEventListener("click", () => {
  openForm(signupForm);
});

loginButton.addEventListener("click", () => {
  openForm(loginForm);
});

/* Closing the overlay */

overlay.addEventListener("click", () => {
  closeForm(loginForm);
  closeForm(signupForm);
});
