const renderNav = () => {
  return `
  <nav>
    <div class="nav-links">
      <p class="nav-links__login">Log-in</p>
      <p class="nav-links__signup">Sign-up</p>
    </div>

    <div class="logged hidden">
      <p>Welcome back <span id="logged-user"></span>!</p>

      <div class="logged__btn-container">
        <p class="logged__logout-btn" id="logout-btn">Logout</p>
      </div>
    </div>
  </nav>
  `;
};

export default renderNav;
