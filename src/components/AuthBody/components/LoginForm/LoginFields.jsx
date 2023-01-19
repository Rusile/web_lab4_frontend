import React from 'react';
import {TextField} from "@mui/material";
import {setLoginFormlogin, setLoginFormPassword} from "../../../../redux/actions";
import {connect} from "react-redux";

const LoginFields = (props) => {

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case "login":
                props.setlogin(value);
                break;
            case "password":
                props.setPassword(value);
                break;
        }
    }

    return (
        <div className="login-form-fields">
            <TextField className="login-form-fields-box-field"
                       variant="outlined"
                       name="login"
                       value={props.login}
                       label="Login"
                       onChange={handleChange}/>
            <TextField className="login-form-fields-box-field"
                       variant="outlined"
                       name="password"
                       value={props.password}
                       label="Password"
                       type="password"
                       onChange={handleChange}/>
        </div>
    )

};

const mapStateToLoginFieldsProps = (state) => {
    return {
        login: state.loginFormlogin, password: state.loginFormPassword
    }
}

const mapDispatchToLoginFieldsProps = (dispatch) => {
    return {
        setlogin: (login) => {
            dispatch(setLoginFormlogin(login))
        }, setPassword: (password) => {
            dispatch(setLoginFormPassword(password))
        }
    }
}

export default connect(mapStateToLoginFieldsProps, mapDispatchToLoginFieldsProps)(LoginFields);