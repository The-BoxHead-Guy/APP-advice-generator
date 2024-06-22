import Cookies from "/node_modules/js-cookie/dist/js.cookie.mjs";

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
  Cookies.remove("jwt");
  logoutBtn.textContent = "";

  logoutBtn.setAttribute("class", "loading logged__logout-btn");

  setTimeout(() => {
    window.location.reload();
  }, 1000);
});
