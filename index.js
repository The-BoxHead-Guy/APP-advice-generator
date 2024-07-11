import render from "./app/render.js";
import AdviceLoad from "./app/components/main/advice-load.js";
import LoadProfile from "./app/components/main/loadProfile.js";
import Logout from "./app/components/main/logout.js";
import Login from "./app/components/login/loginForm.js";
import Overlay from "./app/animations/overlay/overlay.js";

render();

/* Advice Loading */
const adviceLoading = new AdviceLoad();
adviceLoading.submitEvent(adviceLoading.domElements.adviceForm);

/* Profile Loading */
const profileLoading = new LoadProfile();
profileLoading.setProfileData();

/* Logout */
const logout = new Logout();
logout.triggerLogout();

/* Login */
const login = new Login();
login.setDataFromLoginForm();

const overlay = new Overlay();
overlay.triggerLoginForm();
overlay.triggerSignupForm();
overlay.triggerAutomatedCloseOverlay();

// DOM loading event
document.addEventListener("DOMContentLoaded", () => {
  adviceLoading.adviceHandler();
});
