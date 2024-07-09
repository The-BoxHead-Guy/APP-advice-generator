import dice from "/app/svg/icon-dice.svg";
import divider from "/app/svg/pattern-divider-desktop.svg";
import mobileDivider from "/app/svg/pattern-divider-mobile.svg";

const renderApp = () => {
  return `
  <!-- Main -->
  <main class="app">
    <!-- Advice title -->
    <div class="container">
      <h3 id="title" class="app-title">
        Advice
        <span class="app-counter"></span>
      </h3>
    </div>

    <!-- Advice Message -->
    <div class="container">
      <p id="app-msg" class="app-msg"></p>
    </div>

    <!-- Divider -->
    <picture class="container">
      <source media="(min-width: 768px)" srcset="${divider}" alt="" class="app-divider" />
      <img src="${mobileDivider}" alt="" class="app-divider" />
    </picture>

    <!-- Advice button -->
    <form class="container" id="advice-form">
      <button class="app-button">
        <img src="${dice}" alt="dice" class="app-dice" />
      </button>
    </form>
  </main>
  `;
};

export { renderApp };
