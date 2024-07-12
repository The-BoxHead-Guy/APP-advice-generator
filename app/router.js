"use strict";

class Router {
  constructor() {
    this.routes = [
      { path: "/", view: () => console.log("home") },
      { path: "/admin", view: () => console.log("admin") },
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

    return match.route.view();
  }

  triggerUrl() {
    document.body.addEventListener("click", (event) => {
      if (event.target.matches("[admin-crud]")) {
        event.preventDefault();
        this.navigateTo(event.target.href);
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
