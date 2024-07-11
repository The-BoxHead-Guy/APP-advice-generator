const renderLoginForm = () => {
  return `


  <!-- Log-in Screen -->
  <form class="login-form" id="login-form">
    <div class="login-form__title">
      <h2>Log-in</h2>
    </div>

    <div class="login-form_inputs">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" placeholder="example@gmail.com" require />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" placeholder="••••••••" required />
    </div>

    <div class="login-form__button">
      <button class="login-form__submit">Login</button>
    </div>
  </form>
  `;
};

export default renderLoginForm;