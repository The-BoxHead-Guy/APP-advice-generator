import { URL_JWT_DECODE as URL } from "./../fetch/config.js";
import Cookies from "/node_modules/js-cookie/dist/js.cookie.mjs";

// Setting default values
const loggedNav = document.querySelector(".logged");
const username = document.getElementById("logged-user");
const navLinks = document.querySelector(".nav-links");

// Getting cookie data
const cookieData = Cookies.get("jwt");

// Pre-defined states of the application
loggedNav.style.display = "none";

if (cookieData) {
  navLinks.style.display = "none";

  const setProfileData = async () => {
    const profileInfo = await getProfileData(cookieData);

    if (profileInfo) {
      loggedNav.style.display = "flex";
      username.textContent = profileInfo.username;
    } else {
      console.log("Profile data not found");
    }
  };

  setProfileData();
} else {
  console.log("No cookie");
}

// Functions

async function getProfileData(token) {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      Authorization: `${token}`,
    },
  });

  if (res.ok) {
    const decodedData = await res.json();
    return decodedData;
  } else {
    throw new Error("Impossible to fetch the profile data");
  }
}
