"use strict";

import { URL_CRUD as URL } from "../fetch/config.js";

class Crud {
  static async readData() {
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });

    if (res.ok) {
      const decodedData = await res.json();
      return decodedData;
    } else {
      throw new Error("Impossible to fetch the profile data");
    }
  }

  static async updateDataOnServer(bodyText) {
    bodyText = JSON.stringify(bodyText);

    /* Performs a FETCH request to perform the UPDATE operation */
    try {
      const request = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: bodyText,
      });

      if (!request.ok) {
        throw new Error("The request to update data has failed");
      }

      const data = await request.json();
      return data;
    } catch (error) {
      console.log("Error at 'updateDataOnServer': " + error);
    }
  }
}

export default Crud;
