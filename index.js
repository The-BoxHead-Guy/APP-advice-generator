import AdviceLoad from "./app/components/main/advice-load.js";
import LoadProfile from "./app/components/main/loadProfile.js";
import Logout from "./app/components/main/logout.js";
import Login from "./app/components/login/loginForm.js";
import Overlay from "./app/animations/overlay/overlay.js";
import Signup from "./app/components/signup/signupForm.js";
import DiceAnimation from "./app/animations/dice-animation.js";
import Router from "./app/router.js";
// import validateAdmin from "./app/components/admin/admin.js";

// DOM loading event
document.addEventListener("DOMContentLoaded", () => {
  // Router
  const router = new Router();

  router.router();
  router.triggerUrl();
  router.activatePopstateUrlChange();

  if (location.pathname === "/admin") {
    // validateAdmin();

    /* Profile Loading */
    const profileLoading = new LoadProfile();
    profileLoading.setProfileData();

    /* Logout */
    const logout = new Logout();
    logout.triggerLogout();
  }

  if (location.pathname === "/") {
    /* Advice Loading */
    const adviceLoading = new AdviceLoad();
    adviceLoading.adviceHandler();
    adviceLoading.submitEvent(adviceLoading.domElements.adviceForm);

    /* Logout */
    const logout = new Logout();
    logout.triggerLogout();

    /* Login */
    const login = new Login();
    login.setDataFromLoginForm();

    const signup = new Signup();
    signup.setSubmitFormValues();

    /* Profile Loading */
    const profileLoading = new LoadProfile();
    profileLoading.setProfileData();

    const overlay = new Overlay();
    overlay.triggerLoginForm();
    overlay.triggerSignupForm();
    overlay.triggerAutomatedCloseOverlay();

    DiceAnimation.triggerDiceAnimation();
  }
});
