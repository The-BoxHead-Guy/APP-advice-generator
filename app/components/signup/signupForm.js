/**
 * *signup-form.js* comprehends the management of the signup form after submitting
 */

"use strict";

import { URL_SIGNUP as URL } from "./../fetch/config.js";

/**
 * Signup form DOM element
 */
const signupForm = document.getElementById("signup-form");

/**
 * Advice-Generator signup form variables as object.
 */
const signupAssets = {
  usernameInput: document.getElementById("username"),
  emailInput: document.getElementById("signup-email"),
  passwordInput: document.getElementById("signup-password"),
  confirmPasswordInput: document.getElementById("confirm-password"),
};

/**
 * Handles the form submission and prevents its default behavior.
 */
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Setting form values after submitting
  const username = signupAssets.usernameInput.value;
  const email = signupAssets.emailInput.value;
  const password = signupAssets.passwordInput.value;
  const confirmPassword = signupAssets.confirmPasswordInput.value;

  signupSendData(parseJsonData(username, email, password, confirmPassword));
});

/**
 * Sends the signup data to the server.
 *
 * @param {string} bodyData - The body data to be sent to the server.
 */
async function signupSendData(bodyData) {
  console.log(bodyData);

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: bodyData,
  });

  const data = await response.json();

  console.log(data);
}

/**
 * Parses the input data into a specific JSON format that works according the API
 *
 * @param {string} username - The username to be included in the JSON object.
 * @param {string} email - The email to be included in the JSON object.
 * @param {string} password - The password to be included in the JSON object.
 * @param {string} confirmPassword - The confirmed password to be included in the JSON object.
 * @return {string} A JSON string representing the input data.
 */
function parseJsonData(username, email, password, confirmPassword) {
  return JSON.stringify({
    name: username,
    email: email,
    password: password,
    "password-repeat": confirmPassword,
  });
}
