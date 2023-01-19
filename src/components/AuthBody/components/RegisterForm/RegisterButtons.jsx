import React from 'react';
import {LoadingButton} from "@mui/lab";
import {fetchRegister, setRegisterFormError} from "../../../../redux/actions";
import {connect} from "react-redux";
import UserCredentialsValidationService from "../../../../service/UserCredentialsValidationService";

const RegisterButtons = (props) => {

    return (
        <div className="register-form-buttons">
            <LoadingButton className="register-form-login-button"
                           loading={props.loading}
                           variant="outlined"
                           onClick={() => registerIfValid(props.register,
                               props.login,
                               props.password,
                               props.passwordRepeat,
                               props.setErrorMessage)}>
                Register
            </LoadingButton>
        </div>
    );

};

const registerIfValid = (registerFunction, login, password, passwordRepeat, errorMessageSetter) => {
    const loginValidationResult = UserCredentialsValidationService.validateLogin(login);
    const passwordValidationResult = UserCredentialsValidationService.validatePassword(password);
    const passwordMatchResult = UserCredentialsValidationService.validatePasswordsMatch(password, passwordRepeat);

    if (loginValidationResult !== "" || passwordValidationResult !== "") {
        errorMessageSetter(`${loginValidationResult} \n ${passwordValidationResult}`);
    } else if (!passwordMatchResult) {
        errorMessageSetter("Passwords mismatch!")
    } else {
        registerFunction(login, password);
    }
}

const mapStateToRegisterButtonsProps = (state) => {
    return {
        login: state.registerFormlogin,
        password: state.registerFormPassword,
        passwordRepeat: state.registerFormPasswordRepeat,
        loading: state.authFormIsLoading
    }
}

const mapDispatchToRegisterButtonsProps = (dispatch) => {
    return {
        register: (login, password) => {
            dispatch(fetchRegister(login, password))
        },
        setErrorMessage: (errorMessage) => {
            dispatch(setRegisterFormError(errorMessage))
        }
    }
}

export default connect(mapStateToRegisterButtonsProps, mapDispatchToRegisterButtonsProps)(RegisterButtons);