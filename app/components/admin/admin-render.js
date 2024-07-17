import Crud from "./crud.js";

export default function renderAdmin() {
  return `
    <!-- Admin options -->
    <div id="crud" class="crud-container">
      <h3>Pieces of advices</h3>
      <div class="crud__table-container">
        <table class="crud__table">
          <thead class="crud__table-header">
            <tr>
              <th>ID</th>
              <th>Advice</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="crud-tbody">
            ${renderTable()}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

const renderTable = () => {
  createTable();

  return "";
};

async function createTable() {
  const data = await Crud.readData();

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
