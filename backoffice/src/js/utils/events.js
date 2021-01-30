import {
    getById,
    IS_INDEX,
    IS_DASHBOARD,
} from "./constants.js";
import views from "../views/index.js";

export const createEvents = () => {
    if (IS_INDEX) {
        getById('login-form-login').addEventListener('submit', views.login);
    } else if(IS_DASHBOARD){
        getById('dashboard-button-logout').addEventListener('click', views.logOut);
    }
};
