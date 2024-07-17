import Cookies from "js-cookie";
import { URL_JWT_DECODE as URL } from "./../fetch/config.js";

/* Getting token from cookie, it'll get the user back to index if there is no token */
const token = Cookies.get("jwt")
  ? Cookies.get("jwt")
  : (window.location.href = "/");

export default async function validateAdmin() {
  const adminRole = await getAdminRole();
  console.log(adminRole);
}

const fetchAdminData = async () => {
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
};

const getAdminRole = async () => {
  const data = await fetchAdminData();

  return data.role;
};
