const renderSignupForm = () => {
  return `
  <!-- Sign-up Screen -->
  <form class="signup-form" id="signup-form">
    <div class="signup-form__title">
      <h2>Sign-Up</h2>
    </div>

    <div class="signup-form_inputs">
      <label for="name">Username</label>
      <input type="text" name="name" id="username" placeholder="JohnDoe25" />
      <label for="email">Email</label>
      <input type="text" name="email" id="signup-email" placeholder="example@gmail.com" require />
      <label for="password">Password</label>
      <input type="password" name="password" id="signup-password" placeholder="••••••••" required />
      <label for="confirm-password">Confirm Your Password</label>
      <input type="password" name="password-repeat" id="confirm-password" placeholder="••••••••" required />
    </div>

    <div class="signup-form__button">
      <button class="signup-form__submit">Signup</button>
    </div>
  </form>
  `;
};

export default renderSignupForm;
