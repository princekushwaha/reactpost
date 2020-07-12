// HOSTNAME = () => {
//   return "http://192.168.43.21:8000";
// };
// export default HOSTNAME;
import axios from "axios";

let HOSTNAME = "http://192.168.43.21:8000";
export default HOSTNAME = "http://192.168.43.21:8000";

export let check_loggedin = () => {
  console.log("I m clssd");

  if (localStorage.getItem("auth-token") === null) return false;
  else return true;
};

export let setToken = (token) => {
  localStorage.setItem("auth-token", token);
};

export let getToken = () => {
  return localStorage.getItem("auth-token");
};
export let removeToken = () => {
  localStorage.removeItem("auth-token");
};
