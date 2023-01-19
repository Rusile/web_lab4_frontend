import React from 'react';
import {Button} from "@mui/material";
import {fetchDeleteAllHits, fetchHitCheck, setFormError} from "../../../../redux/actions";
import {connect} from "react-redux";
import HitCoordinatesValidationService from "../../../../service/HitCoordinatesValidationService";

const CoordinatesButtons = (props) => {

    return (
        <div className="coordinates-form-buttons">
            <Button className="coordinates-form-buttons-check"
                    variant="outlined"
                    disabled={props.tableIsLoading}
                    onClick={() => checkHitIfValid(props.fetchCheckHit,
                        props.currentEnteredX,
                        props.currentEnteredY,
                        props.currentEnteredR,
                        props.setFormError)}>
                Check
            </Button>
            <Button className="coordinates-form-buttons-reset"
                    variant="outlined"
                    disabled={props.tableIsLoading}
                    onClick={props.fetchDeleteAllHits}>
                Reset
            </Button>
        </div>
    )

};

const checkHitIfValid = (hitCheckFunction, x, y, r, errorMessageSetter) => {
    const xValidationResult = HitCoordinatesValidationService.validateCheckBox(x, "X");
    const yValidationResult = HitCoordinatesValidationService.validateYCoordinate(y);
    const rValidationResult = HitCoordinatesValidationService.validateCheckBox(r, "R");

    if (xValidationResult !== "" || yValidationResult !== "" || rValidationResult !== "") {
        errorMessageSetter(`${xValidationResult} \n ${yValidationResult} \n ${rValidationResult}`.trim());
    } else {
        const hit = {
            x: x,
            y: y,
            r: r
        };
        hitCheckFunction(hit);
    }


}

const mapStateToCoordinatesButtonsProps = (state) => {
    return {
        currentEnteredX: state.currentEnteredX,
        currentEnteredY: state.currentEnteredY,
        currentEnteredR: state.currentEnteredR,
        tableIsLoading: state.tableIsLoading
    }
}

const mapDispatchToCoordinatesButtonsProps = (dispatch) => {
    return {
        fetchCheckHit: (hit) => {
            dispatch(fetchHitCheck(hit))
        },
        fetchDeleteAllHits: () => {
            dispatch(fetchDeleteAllHits())
        },
        setFormError: (error) => {
            dispatch(setFormError(error))
        }
    }
}

export default connect(mapStateToCoordinatesButtonsProps, mapDispatchToCoordinatesButtonsProps)(CoordinatesButtons);