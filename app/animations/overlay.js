const overlay = document.getElementById("overlay");
const loginButton = document.querySelector(".nav-links__login");
const signupButton = document.querySelector(".nav-links__signup");

console.log(loginButton);

// Activates the overlay after click

// todo: Only change the opacity of the overlay in order to set the transition effect properly.

loginButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

signupButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

/* Closing the overlay */

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
