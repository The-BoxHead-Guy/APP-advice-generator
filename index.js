import render from "./app/render.js";
import AdviceLoad from "./app/components/main/advice-load.js";
import LoadProfile from "./app/components/main/loadProfile.js";
import Logout from "./app/components/main/logout.js";

render();

/* Advice Loading */
const adviceLoading = new AdviceLoad();
adviceLoading.submitEvent(adviceLoading.domElements.adviceForm);

/* Profile Loading */
const profileLoading = new LoadProfile();
console.log(profileLoading.setProfileData());

/* Logout */
const logout = new Logout();
logout.triggerLogout();

// DOM loading event
document.addEventListener("DOMContentLoaded", () => {
  adviceLoading.adviceHandler();
});
