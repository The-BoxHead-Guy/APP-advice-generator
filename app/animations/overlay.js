// Overlay Variables

const overlay = document.getElementById("overlay");
const loginButton = document.querySelector(".nav-links__login");
const signupButton = document.querySelector(".nav-links__signup");

const loginForm = document.getElementById("login-form");

// Activates the overlay after click

// todo: Only change the opacity of the overlay in order to set the transition effect properly.

loginButton.addEventListener("click", () => {
  overlay.style.display = "flex";
  loginForm.style.display = "flex";

  setTimeout(() => {
    loginForm.style.top = "50%";
    loginForm.style.transform = "translateY(-50%)";
  }, 500);
});

signupButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

/* Closing the overlay */

overlay.addEventListener("click", () => {
  loginForm.style.top = "150%";

  setTimeout(() => {
    overlay.style.display = "none";
    loginForm.style.display = "none";
  }, 1000);
});
