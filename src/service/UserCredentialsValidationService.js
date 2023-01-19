const UserCredentialsValidationService = {
    validateLogin: (login) => {

        if (login === null || login === "") {
            return "Login field should not be empty!"
        }

        if (!validateLoginFormat(login)) {
            return "Login must be longer than 5 symbols!"
        }

        return "";

    },
    validatePassword: (password) => {

        if (password === null || password === "") {
            return "Password field should not be empty!"
        }

        if (password.length < 6) {
            return "Password should be longer then 6 symbols!"
        }

        if (password.length > 20) {
            return "Password should be shorter then 20 symbols!"
        }

        return "";

    },

    validatePasswordsMatch: (password, passwordRepeat) => {

        return password === passwordRepeat;

    }
}

const validateLoginFormat = (login) => {
    return String(login).length > 5;
}

export default UserCredentialsValidationService;