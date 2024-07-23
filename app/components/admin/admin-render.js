import Admin from "./admin-render-class";

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
            ${admin.renderTable()}
          </tbody>
        </table>
      </div>
      <div class="crud__update-container">
        
      </div>
    </div>
  `;
}

const admin = new Admin();
