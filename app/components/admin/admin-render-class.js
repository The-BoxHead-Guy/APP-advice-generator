import Crud from "./crud.js";

export default class Admin {
  constructor() {
    this._data = this.fetchData();
  }

  get data() {
    return this._data;
  }

  get updateContainer() {
    return this._updateContainer;
  }

  async fetchData() {
    return await Crud.readData();
  }

  renderTable = () => {
    this.createTable();

    return "";
  };

  createInputBox(inputText) {
    const input = document.createElement("input");

    input.setAttribute("type", "text");
    input.setAttribute("value", inputText);
    input.classList.add("crud__input");

    return input;
  }

  createButton(buttonName) {
    const button = document.createElement("button");
    button.classList.add("crud__update-button");
    button.textContent = buttonName;

    return button;
  }

  async updateTable(trigger, row) {
    trigger.addEventListener("click", (event) => {
      if (event.target.matches(".fa-pen-to-square")) {
        const input = this.createInputBox(row.childNodes[1].textContent);
        const updateButton = this.createButton("Update");

        const updateContainer = document.querySelector(
          ".crud__update-container"
        );

        const updateInputBox = document.querySelector(".crud__input") ?? null;
        const updateButtonBox =
          document.querySelector(".crud__update-button") ?? null;

        if (updateInputBox === null) {
          updateContainer.appendChild(input);
          updateContainer.appendChild(updateButton);
        } else {
          updateInputBox.remove();
          updateButtonBox.remove();
          updateContainer.appendChild(input);
          updateContainer.appendChild(updateButton);
        }

        /* Performing the changes */
        updateButton.addEventListener("click", async (event) => {
          if (event.target.matches(".crud__update-button")) {
            const data = {
              id: row.childNodes[0].textContent,
              text: input.value,
            };

            const response = await Crud.updateDataOnServer(data);

            if (response.success) {
              queueMicrotask(() => {
                alert("Data updated successfully");
              });

              setTimeout(() => {
                row.childNodes[1].textContent = input.value;
                updateContainer.innerHTML = null;
              }, Math.floor(Math.random() * 2000));
            } else {
              console.log("Failed to update data");
            }
          }
        });
      }
    });
  }
  async createTable() {
    const data = await this.data;
    const table = document.getElementById("crud-tbody");

    data.forEach((element, index) => {
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

      /* Handling edit button */
      this.updateTable(triggers, row);
    });
  }
}
