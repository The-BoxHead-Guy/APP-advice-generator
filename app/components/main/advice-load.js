"use strict";

import { URL_ADVICE_FETCHING as URL } from "../fetch/config.js";

/**
 * "advice-load.js" comprehends the loading of the advice after fetching and connection
 * with the backend API (PHP)
 */

export default class AdviceLoad {
  constructor() {
    this._adviceForm = document.getElementById("advice-form");
    this._adviceElement = document.getElementById("app-msg");
    this._messageElement = document.querySelector(".app-counter");
  }

  get domElements() {
    return {
      adviceForm: this._adviceForm,
      adviceElement: this._adviceElement,
      messageElement: this._messageElement,
    };
  }

  /**
   * Handles the advice by making an AJAX request to the server and updating the UI.
   * @param {event} value - The value to be passed to the server.
   * @return {string} - The response from the server.
   */
  adviceHandler() {
    // Executing fetch() to get the data
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Impossible to get data from server");
        }
      })
      .then((data) => {
        // console.log(data);
        this.updateUI(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Updates the UI with the provided value from the server.
   * @param {string} value - The value containing the advice and id.
   */
  updateUI(value) {
    const response = value;
    // console.log("response: ", response);

    // Updates the UI in the HTML after setting the data
    this._adviceElement.innerHTML = response.advice_text;
    this._messageElement.innerHTML = `#${response.advice_id}`;
  }

  submitEvent(element) {
    element.addEventListener("submit", (event) => {
      event.preventDefault();
      this.adviceHandler();
    });
  }
}
