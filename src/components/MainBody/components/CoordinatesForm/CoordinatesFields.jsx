import React from 'react';
import {FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {fetchGetAllHitsByR, setR, setX, setY} from "../../../../redux/actions";
import {connect} from "react-redux";

const CoordinatesFields = (props) => {

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case "xField":
                props.setX(value);
                break;
            case "yField":
                if (value.length < 11) {
                    props.setY(value);
                }
                break;
            case "rField":
                props.setR(value);
                props.fetchGetAllHitsByR(value);
                break;
        }
    }

    return (
        <div className="coordinates-form-fields">
            <RadioGroup row
                        className="coordinates-form-fields-x-radio"
                        value={props.currentEnteredX}
                        name="xField"
                        onChange={handleChange}>
                <FormControlLabel value={-3} control={<Radio/>} label="-3"/>
                <FormControlLabel value={-2} control={<Radio/>} label="-2"/>
                <FormControlLabel value={-1} control={<Radio/>} label="-1"/>
                <FormControlLabel value={0} control={<Radio/>} label="0"/>
                <FormControlLabel value={1} control={<Radio/>} label="1"/>
                <FormControlLabel value={2} control={<Radio/>} label="2"/>
                <FormControlLabel value={3} control={<Radio/>} label="3"/>
                <FormControlLabel value={4} control={<Radio/>} label="4"/>
            </RadioGroup>
            <TextField className="coordinates-form-fields-y-field"
                       variant="outlined"
                       name="yField"
                       value={props.currentEnteredY}
                       label="Y coordinate"
                       type="number"
                       onChange={handleChange}/>
            <RadioGroup row
                        className="coordinates-form-fields-r-radio"
                        value={props.currentEnteredR}
                        name="rField"
                        onChange={handleChange}>
                <FormControlLabel value={1} control={<Radio/>} label="1"/>
                <FormControlLabel value={2} control={<Radio/>} label="2"/>
                <FormControlLabel value={3} control={<Radio/>} label="3"/>
                <FormControlLabel value={4} control={<Radio/>} label="4"/>
            </RadioGroup>
        </div>
    )

};

function mapStateToCoordinatesFieldsProps(state) {
    return {
        currentEnteredX: state.currentEnteredX,
        currentEnteredY: state.currentEnteredY,
        currentEnteredR: state.currentEnteredR,
    }
}

function mapDispatchToCoordinatesFieldsProps(dispatch) {
    return {
        setX: (x) => dispatch(setX(x)),
        setY: (y) => dispatch(setY(y)),
        setR: (r) => dispatch(setR(r)),
        fetchGetAllHitsByR: (radius) => dispatch(fetchGetAllHitsByR(radius))
    }
}

export default connect(mapStateToCoordinatesFieldsProps, mapDispatchToCoordinatesFieldsProps)(CoordinatesFields);