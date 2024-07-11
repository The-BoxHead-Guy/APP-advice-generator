/**
 * App's entry point where is going to be rendered
 */
import renderNav from "./components/nav/nav-render.js";
import { renderApp as renderAppLayout } from "./components/main/app-render.js";
import renderOverlay from "./animations/overlay/render-overlay.js";
import renderLoginForm from "./components/login/login-render.js";
import renderSignupForm from "./components/signup/signup-render.js";

function render() {
  const app = document.getElementById("app");

  const components = [
    renderNav,
    renderAppLayout,
    renderOverlay,
    renderLoginForm,
    renderSignupForm,
  ];

  // Render components
  app.innerHTML = components.map((component) => component()).join("");
}

export default render;
