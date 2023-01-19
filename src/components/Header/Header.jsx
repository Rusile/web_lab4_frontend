import './Header.scss'

import React from 'react';
import {Button} from "@mui/material";
import {connect} from "react-redux";
import LogoutService from "../../service/LogoutService";

const Header = (props) => {

    const logOutAction = () => {
        LogoutService.logout();
    };

    return (
        <header className="header">
            <div className="header-text">
                <h1 className="header-text-name">Web technologies laboratory work №4</h1>
                <h2 className="header-text-variant">variant 321321</h2>
            </div>

            {props.isLoggedIn &&
                <Button variant="contained" className="header-button" onClick={logOutAction}>
                    Log out
                </Button>}

        </header>
    );

};

const mapStateToHeaderProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
}

export default connect(mapStateToHeaderProps)(Header);