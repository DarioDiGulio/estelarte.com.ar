import { getById, hiddenElement, showElement } from "../../utils/constants.js";
import controllers from "../../controllers/index.js";

export const login = (event) => {
    event.preventDefault();
    const user = getById('login-input-user').value;
    const pass = getById('login-input-password').value;
    const error = getById('login-span-error');

    if (user && pass) {
        hiddenElement(error);
        controllers.login(user, pass);
    } else {
        error.innerText = 'Por favor, ingresá tu usuario y contraseña para continuar';
        showElement(error);
    }

};
