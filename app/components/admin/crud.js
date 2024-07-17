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
}

export default Crud;
