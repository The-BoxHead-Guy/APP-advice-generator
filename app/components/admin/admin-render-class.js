import Crud from "./crud.js";

export default class Admin {
  constructor() {
    this._data = this.fetchData();
  }

  get data() {
    return this._data;
  }

  async fetchData() {
    return await Crud.readData();
  }

  renderTable = () => {
    this.createTable();

    return "";
  };
  async createTable() {
    const data = await this.data;
    const table = document.getElementById("crud-tbody");

    data.forEach((element) => {
      const row = document.createElement("tr");
      row.classList.add("crud__table-row");

      /* Creates ID data element */
      const id = document.createElement("td");
      // id.classList.add("crud__table-data");
      id.textContent = `${element.advice_id}`;

      /* Creates advice data element */
      const advice = document.createElement("td");
      advice.textContent = element.advice_text;

      /* Creates edit and delete buttons */
      const action = document.createElement("td");
      const triggers = document.createElement("div");
      triggers.classList.add("crud__triggers");

      triggers.innerHTML = `
    <i class="fa-regular fa-pen-to-square"></i>
    <i class="fa-regular fa-trash-can"></i>`;

      action.appendChild(triggers);

      /* Appending elements to row */
      row.appendChild(id);
      row.appendChild(advice);
      row.appendChild(action);

      /* Appending row to table */
      table.appendChild(row);
    });
  }
}
