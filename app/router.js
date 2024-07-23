import LoadProfile from "./components/main/loadProfile.js";
import Render from "./render.js";

const render = new Render();

class Router {
  constructor() {
    this.routes = [
      { path: "/", view: () => render.executeRender() },
      { path: "/admin", view: () => render.executeRenderAdmin() },
    ];
  }

  get possibleMatches() {
    return this.routes.map((route) => {
      return {
        route: route,
        isMatch: location.pathname === route.path,
      };
    });
  }

  init() {
    let match = this.possibleMatches.find(
      (possibleMatch) => possibleMatch.isMatch
    );

    if (!match) {
      match = {
        route: this.routes[0],
        isMatch: true,
      };

      this.navigateTo(match.route.path);
    }

    match.route.view();
  }

  triggerUrl() {
    document.body.addEventListener("click", (event) => {
      /* Checks if the clicked element is `admin options` */
      if (event.target.matches("#admin-crud")) {
        event.preventDefault();
        this.navigateTo(event.target.href);

        /* Loads profile after triggering the navigation */
        const profileLoading = new LoadProfile();
        profileLoading.setProfileData();
      }
    });
  }

  activatePopstateUrlChange() {
    window.addEventListener("popstate", this.router);
  }

  navigateTo(url) {
    history.pushState(null, null, url);
    this.init();
  }

  redirectTo(url) {
    history.replaceState(null, null, url);
    this.init();
  }

  router = async () => {
    this.init();
  };
}

export default Router;
