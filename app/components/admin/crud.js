"use strict";

import { URL_CRUD as URL } from "../fetch/config.js";

class Crud {
  //todo: Set a new meaningful name to this function
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

  /**
   * Deletes data from the server.
   *
   * @param {number} id - The ID of the data to be deleted.
   * @return {Promise<Object>} A promise that resolves to the deleted data.
   */
  static async deleteDataOnServer(id) {
    const bodyText = JSON.stringify(id);

    try {
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
        },
        body: bodyText,
      });

      if (!response.ok) {
        throw new Error("The request to delete data has failed");
      }

      return await response.json();
    } catch (error) {
      console.log("Error at 'deleteDataOnServer': " + error);
    }
  }
}

export default Crud;
