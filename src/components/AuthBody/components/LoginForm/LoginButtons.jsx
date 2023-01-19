import React from 'react';
import {LoadingButton} from "@mui/lab";
import {fetchLogin, setLoginFormError} from "../../../../redux/actions";
import {connect} from "react-redux";
import UserCredentialsValidationService from "../../../../service/UserCredentialsValidationService";

const LoginButtons = (props) => {

    return (
        <div className="login-form-buttons">
            <LoadingButton className="login-form-login-button"
                           loading={props.loading}
                           variant="outlined"
                           onClick={() => loginIfValid(props.requestLogin, props.login, props.password, props.setErrorMessage)}>
                Login
            </LoadingButton>
        </div>
    )

};

const loginIfValid = (loginFunction, login, password, errorMessageSetter) => {
    const loginValidationResult = UserCredentialsValidationService.validateLogin(login);
    const passwordValidationResult = UserCredentialsValidationService.validatePassword(password);

    if (loginValidationResult !== "" || passwordValidationResult !== "") {
        errorMessageSetter(`${loginValidationResult} \n ${passwordValidationResult}`);
    } else {
        loginFunction(login, password);
    }
}

const mapStateToLoginButtonsProps = (state) => {
    return {
        login: state.loginFormlogin,
        password: state.loginFormPassword,
        loading: state.authFormIsLoading
    }
}

const mapDispatchToLoginButtonsProps = (dispatch) => {
    return {
        requestLogin: (login, password) => {
            dispatch(fetchLogin(login, password))
        },
        setErrorMessage: (errorMessage) => {
            dispatch(setLoginFormError(errorMessage))
        }
    }
}

export default connect(mapStateToLoginButtonsProps, mapDispatchToLoginButtonsProps)(LoginButtons);