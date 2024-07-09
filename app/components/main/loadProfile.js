import { URL_JWT_DECODE as URL } from "./../fetch/config.js";
import Cookies from "js-cookie";

class LoadProfile {
  constructor() {
    // Setting default values
    this.loggedNav = document.querySelector(".logged");
    this.username = document.getElementById("logged-user");
    this.navLinks = document.querySelector(".nav-links");
    this.adminOptions = document.getElementById("admin-crud") ?? null;
    this.loggedContainer = document.querySelector(".logged__btn-container");

    // Sets cookie
    this._cookieToken = Cookies.get("jwt") ?? null;
  }

  get cookieToken() {
    return this._cookieToken;
  }

  createAdminOptionsElement() {
    const anchorLink = document.createElement("a");

    anchorLink.classList.add("logged__admin-crud");
    anchorLink.setAttribute("id", "admin-crud");
    anchorLink.setAttribute("href", "app/components/admin/admin.html");
    anchorLink.innerHTML = "admin options";

    return anchorLink;
  }

  async setProfileData() {
    if (this.cookieToken) {
      this.navLinks.classList.add("hidden");

      try {
        const profileInfo = await this.getProfileData(this.cookieToken);
        console.log(profileInfo);

        if (!profileInfo) {
          throw new Error("Profile data doesn't exist");
        }

        this.loggedNav.classList.remove("hidden");
        this.username.textContent = profileInfo.username;

        if (profileInfo.role === "admin") {
          const adminOptionsElement = this.createAdminOptionsElement();

          this.loggedContainer.appendChild(adminOptionsElement);
        }

        if (profileInfo.role === "user") {
          console.log("this user is user");
        } else {
          throw new Error("Profile role doesn't exist");
        }
      } catch (error) {
        console.log("Error at 'setProfileData': " + error);
      }
    }

    if (!this.cookieToken) {
      console.log("this user is not logged in");
      return false;
    }
  }

  async getProfileData(token) {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `${token}`,
      },
    });

    try {
      if (res.ok) {
        const decodedData = await res.json();
        return decodedData;
      } else {
        throw new Error("Impossible to fetch the profile data");
      }
    } catch (error) {
      console.log("Error at 'getProfileData': " + error);
    }
  }
}

export default LoadProfile;
