import { URL_JWT_DECODE as URL } from "./../fetch/config.js";
import Cookies from "/node_modules/js-cookie/dist/js.cookie.mjs";

// Setting default values
const loggedNav = document.querySelector(".logged");
const username = document.getElementById("logged-user");
const navLinks = document.querySelector(".nav-links");
const adminOptions = document.getElementById("admin-crud");
const loggedContainer = document.querySelector(".logged__btn-container");

// Getting cookie data
const cookieDataToken = Cookies.get("jwt");
const paragraph = document.createElement("a");

paragraph.classList.add("logged__admin-crud");
paragraph.setAttribute("id", "admin-crud");
paragraph.setAttribute("href", "app/components/admin/admin.html");
paragraph.innerHTML = "admin options";

// Pre-defined states of the application
loggedNav.style.display = "none";

if (cookieDataToken) {
  navLinks.style.display = "none";

  const setProfileData = async () => {
    const profileInfo = await getProfileData(cookieDataToken);

    if (profileInfo) {
      loggedNav.style.display = "flex";
      username.textContent = profileInfo.username;

      if (profileInfo.role === "admin") {
        loggedContainer.appendChild(paragraph);
      }

      if (profileInfo.role === "user") {
        console.log("this user is user");
      }
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
