import './LoginForm.scss'

import React from 'react';
import LoginFields from "./LoginFields";
import LoginButtons from "./LoginButtons";
import {Snackbar} from "@mui/material";
import {Alert} from "@mui/lab";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {setLoginFormError} from "../../../../redux/actions";

const LoginForm = (props) => {

    return (
        <div className="login-form">
            <LoginFields/>
            <LoginButtons loading={false}/>
            <Snackbar open={props.errorMessage !== ""}
                      autoHideDuration={3000}
                      onClose={() => props.setErrorMessage("")}>
                <Alert className="login-form-error-alert"
                       onClose={() => props.setErrorMessage("")}
                       severity="error">
                    {props.errorMessage}
                </Alert>
            </Snackbar>
            {props.isLoggedIn && <Navigate to="/"/>}
        </div>
    );

};

const mapStateToLoginFormProps = (state) => {
    return {
        errorMessage: state.loginFormErrorMessage,
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToLoginFormProps = (dispatch) => {
    return {
        setErrorMessage: (errorMessage) => {
            dispatch(setLoginFormError(errorMessage))
        }
    }
}

export default connect(mapStateToLoginFormProps, mapDispatchToLoginFormProps)(LoginForm);