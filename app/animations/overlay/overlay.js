"use strict";

class Overlay {
  constructor() {
    this.overlay = document.getElementById("overlay");
    this.loginButton = document.querySelector(".nav-links__login");
    this.signupButton = document.querySelector(".nav-links__signup");

    this.loginForm = document.getElementById("login-form");
    this.signupForm = document.getElementById("signup-form");
  }

  openForm(domElement) {
    console.log(domElement);
    this.overlay.classList.add("overlay--active");

    setTimeout(() => {
      domElement.classList.add("form--cinematic");
    }, 500);
  }

  closeForm(domElement) {
    domElement.classList.remove("form--cinematic");

    setTimeout(() => {
      this.overlay.classList.remove("overlay--active");
    }, 1000);
  }

  triggerLoginForm() {
    this.loginButton.addEventListener("click", () => {
      this.openForm(this.loginForm);
    });
  }

  triggerSignupForm() {
    this.signupButton.addEventListener("click", () => {
      this.openForm(this.signupForm);
    });
  }

  triggerAutomatedCloseOverlay() {
    this.overlay.addEventListener("click", () => {
      this.closeForm(this.loginForm);
      this.closeForm(this.signupForm);
    });
  }
}

export default Overlay;
