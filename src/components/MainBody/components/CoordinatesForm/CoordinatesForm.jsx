import './CoordinatesForm.scss'

import React from 'react';
import CoordinatesFields from "./CoordinatesFields";
import CoordinatesButtons from "./CoordinatesButtons";
import {setFormError} from "../../../../redux/actions";
import {connect} from "react-redux";
import {Alert, Snackbar} from "@mui/material";

const CoordinatesForm = (props) => {

    return (
        <div className="coordinates-form tile">

            <CoordinatesFields/>
            <CoordinatesButtons/>
            <Snackbar open={props.formError !== ""}
                      autoHideDuration={6000}
                      onClose={() => props.setFormError("")}>
                <Alert className="coordinate-form-error-alert"
                       onClose={() => props.setFormError("")}
                       severity="error">
                    {props.formError}
                </Alert>
            </Snackbar>
        </div>
    )

};

const mapStateToCoordinatesFormProps = (state) => {
    return {
        formError: state.formErrorMessage,
    }
}

const mapDispatchToCoordinatesFormProps = (dispatch) => {
    return {
        setFormError: (formError) => {
            dispatch(setFormError(formError))
        }
    }
}

export default connect(mapStateToCoordinatesFormProps, mapDispatchToCoordinatesFormProps)(CoordinatesForm);