import './RegisterForm.scss'

import React from 'react';
import RegisterFields from "./RegisterFields";
import RegisterButtons from "./RegisterButtons";
import {setRegisterFormError, setRegisterFormSuccessMessage} from "../../../../redux/actions";
import {connect} from "react-redux";
import {Snackbar} from "@mui/material";
import {Alert} from "@mui/lab";

const RegisterForm = (props) => {

    return (
        <div className="register-form">
            <RegisterFields/>
            <RegisterButtons loading={false}/>
            <Snackbar open={props.successMessage !== ""}
                      autoHideDuration={6000}
                      onClose={() => props.setSuccessMessage("")}>
                <Alert className="register-form-success-alert"
                       onClose={() => props.setSuccessMessage("")}
                       severity="success">
                    {props.successMessage}
                </Alert>
            </Snackbar>
            <Snackbar open={props.errorMessage !== ""}
                      autoHideDuration={3000}
                      onClose={() => props.setErrorMessage("")}>
                <Alert className="register-form-error-alert"
                       onClose={() => props.setErrorMessage("")}
                       severity="error">
                    {props.errorMessage}
                </Alert>
            </Snackbar>
        </div>
    );

};

const mapStateToRegisterFormProps = (state) => {
    return {
        errorMessage: state.registerFormErrorMessage, successMessage: state.registerFormSuccessMessage
    }
}

const mapDispatchToRegisterFormProps = (dispatch) => {
    return {
        setErrorMessage: (errorMessage) => {
            dispatch(setRegisterFormError(errorMessage))
        }, setSuccessMessage: (successMessage) => {
            dispatch(setRegisterFormSuccessMessage(successMessage))
        }
    }
}

export default connect(mapStateToRegisterFormProps, mapDispatchToRegisterFormProps)(RegisterForm);