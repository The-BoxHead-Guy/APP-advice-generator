/**
 * *signup-form.js* comprehends the management of the signup form after submitting
 */

"use strict";

import { URL_SIGNUP as URL } from "./../fetch/config.js";

class Signup {
  constructor() {
    this.usernameInput = document.getElementById("username");
    this.emailInput = document.getElementById("signup-email");
    this.passwordInput = document.getElementById("signup-password");
    this.confirmPasswordInput = document.getElementById("confirm-password");

    this.signupForm = document.getElementById("signup-form");
  }

  setSubmitFormValues() {
    this.signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      this._username = this.usernameInput.value;
      this._email = this.emailInput.value;
      this._password = this.passwordInput.value;
      this._confirmPassword = this.confirmPasswordInput.value;

      this.signupSendData(
        this.parseJsonData(
          this.username,
          this.email,
          this.password,
          this.confirmPassword
        )
      );
    });
  }

  get username() {
    return this._username;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get confirmPassword() {
    return this._confirmPassword;
  }

  /**
   * Sends the signup data to the server.
   *
   * @param {string} bodyData - The body data to be sent to the server.
   */
  async signupSendData(bodyData) {
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
  parseJsonData(username, email, password, confirmPassword) {
    return JSON.stringify({
      name: username,
      email: email,
      password: password,
      "password-repeat": confirmPassword,
    });
  }
}

export default Signup;
