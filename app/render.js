/**
 * App's entry point where is going to be rendered
 */
import renderNav from "./components/nav/nav-render.js";
import { renderApp as renderAppLayout } from "./components/main/app-render.js";
import renderOverlay from "./animations/overlay/render-overlay.js";
import renderLoginForm from "./components/login/login-render.js";
import renderSignupForm from "./components/signup/signup-render.js";
import renderAdmin from "./components/admin/admin-render.js";

class Render {
  constructor() {
    this.app = document.getElementById("app");
    this.mainComponents = [
      renderNav,
      renderAppLayout,
      renderOverlay,
      renderLoginForm,
      renderSignupForm,
    ];
    this.adminView = [];
  }

  executeRender() {
    this.app.innerHTML = this.mainComponents
      .map((component) => component())
      .join("");
  }

  executeRenderAdmin() {
    this.adminView.push(renderAdmin, renderNav);

    this.app.innerHTML = this.adminView
      .map((component) => component())
      .join("");
  }
}

export default Render;
