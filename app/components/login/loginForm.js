"use strict";

import { URL_LOGIN as URL } from "./../fetch/config.js";
import Cookies from "/node_modules/js-cookie/dist/js.cookie.mjs";

/**
 * *login-form.js* comprehends the management of the login form after submitting"
 */

/**
 * Advice-Generator login form variables as object.
 */
const LoginAssets = {
  loginForm: document.getElementById("login-form"),
  emailInput: document.getElementById("email"),
  passwordInput: document.getElementById("password"),
};

LoginAssets.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Setting form values after submitting
  const email = LoginAssets.emailInput.value;
  const password = LoginAssets.passwordInput.value;

  const status = sendLoginData(email, password);
});

async function sendLoginData(email, password) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await response.json();

  // Creating the cookie with the JWT token
  try {
    if (response.status === 200) {
      setJwtCookie(data);

      // Refresh the page after 1 second
      setTimeout(function () {
        location.reload();
      }, 1000);
    } else {
      throw new Error(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function setJwtCookie(token) {
  Cookies.set("jwt", token);
}
