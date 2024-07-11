"use strict";

import { URL_LOGIN as URL } from "./../fetch/config.js";
import Cookies from "js-cookie";

/**
 * Advice-Generator
 */
class Login {
  constructor() {
    this.loginForm = document.getElementById("login-form");
    this._email = document.getElementById("email");
    this._password = document.getElementById("password");
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  set email(email) {
    this._email = email;
  }

  set password(password) {
    this._password = password;
  }

  setDataFromLoginForm() {
    this.loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      this.email = this.email.value;
      this.password = this.password.value;

      this.sendLoginDataToApi();
    });
  }

  async sendLoginDataToApi() {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password,
      }),
    });

    const data = await response.json();

    // Creating the cookie with the JWT token
    try {
      if (response.status === 200 && response.ok === true) {
        this.setJwtCookie(data);

        // Sets status for client

        // Refresh the page after 1 second
        setTimeout(function () {
          location.reload();
        }, 1000);

        return (this.status = data);
      } else {
        throw new Error(data);
      }
    } catch (error) {
      console.log("Error at 'sendLoginDataToApi': " + error);
    }
  }

  setJwtCookie(token) {
    Cookies.set("jwt", token);
  }
}

export default Login;
