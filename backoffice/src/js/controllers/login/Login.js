import { redirect, showNotification } from "../../utils/constants.js";
import Endpoints from "../enpoints.js";
import $Request from "../../models/Request.js";
import Fetch from "../../models/Fetch.js";

const isValidLogin = (user, pass) => {
  let isValidData = true;
  isValidData = user.value !== "" || user.value.includes(" ");

  if (isValidData) {
    isValidData = pass.value !== "" || pass.value.includes(" ");
  }

  return isValidData;
};

export const login = async (user, pass) => {
  let request;
  let response;

  if (isValidLogin(user, pass)) {
    // const data = {
    //   data: {
    //     email: user,
    //     password: pass,
    //   },
    // };
    // const { endpoint, method, session } = Endpoints.login;
    // request = new $Request(data, endpoint, method, session);
    // const fetch = new Fetch(request);
    // response = await fetch.fetch();
    redirect('dashboard');
  } else {
    showNotification(
      "El usuario o la contraseña son incorrectos, por favor intentá de nuevo."
    );
  }

  return response;
};
