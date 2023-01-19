import React from 'react';
import {TextField} from "@mui/material";
import {setRegisterFormlogin, setRegisterFormPassword, setRegisterFormPasswordRepeat} from "../../../../redux/actions";
import {connect} from "react-redux";

const RegisterFields = (props) => {

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case "login":
                props.setlogin(value);
                break;
            case "password":
                props.setPassword(value);
                break;
            case "passwordRepeat":
                props.setPasswordRepeat(value);
                break;
        }
    }

    return (
        <div className="register-form-fields">
            <TextField className="register-form-fields-box-field" variant="outlined" name="login" value={props.login}
                       label="login" type="login" onChange={handleChange}/>
            <TextField className="register-form-fields-box-field" variant="outlined" name="password"
                       value={props.password} label="Password" type="password" onChange={handleChange}/>
            <TextField className="register-form-fields-box-field" variant="outlined" name="passwordRepeat"
                       value={props.passwordRepeat} label="Repeat password" type="password" onChange={handleChange}/>
        </div>
    );

};


const mapStateToRegisterFieldsProps = (state) => {
    return {
        login: state.registerFormlogin,
        password: state.registerFormPassword,
        passwordRepeat: state.registerFormPasswordRepeat,
    }
}

function mapDispatchToRegisterFieldsProps(dispatch) {
    return {
        setlogin: (login) => {
            dispatch(setRegisterFormlogin(login))
        }, setPassword: (password) => {
            dispatch(setRegisterFormPassword(password))
        }, setPasswordRepeat: (passwordRepeat) => {
            dispatch(setRegisterFormPasswordRepeat(passwordRepeat))
        }
    }
}

export default connect(mapStateToRegisterFieldsProps, mapDispatchToRegisterFieldsProps)(RegisterFields);