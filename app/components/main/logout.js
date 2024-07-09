import Cookies from "js-cookie";

class Logout {
  constructor() {
    this.logoutBtn = document.getElementById("logout-btn");
  }

  triggerLogout() {
    this.logoutBtn.addEventListener("click", () => {
      Cookies.remove("jwt");
      this.logoutBtn.textContent = "";
      this.logoutBtn.setAttribute("class", "loading logged__logout-btn");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }
}

export default Logout;
