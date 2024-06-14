"use strict";

/**
 * "advice-load.js" comprehends the loading of the advice after fetching and connection
 * with the backend API (PHP)
 */

// Selects the form where the advice is
const adviceForm = document.getElementById("advice-form");
const adviceElement = document.querySelector("#app-msg");
const messageElement = document.querySelector(".app-counter");

/**
 * Handles the advice by making an AJAX request to the server and updating the UI.
 * @param {event} value - The value to be passed to the server.
 * @return {string} - The response from the server.
 */
function adviceHandler(value) {
  const URL = "http://127.0.0.1:8443/api/includes/advice-fetching.php";

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
      updateUI(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

/**
 * Updates the UI with the provided value from the server.
 * @param {string} value - The value containing the advice and id.
 */
function updateUI(value) {
  const response = value;
  // console.log("response: ", response);

  // Updates the UI in the HTML after setting the data
  adviceElement.innerHTML = response.advice_text;
  messageElement.innerHTML = `#${response.advice_id}`;
}

// Handles the form submission and prevents its default behavior.
adviceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  adviceHandler();
});

// Handles the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  adviceHandler();
});
