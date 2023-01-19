import './MainBody.scss'

import React from 'react';
import Graph from "./components/Graph/Graph";
import CoordinatesForm from "./components/CoordinatesForm/CoordinatesForm";
import DataTable from "./components/DataTable/DataTable";
import isMobile from "../../service/isMobile";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const MainBody = (props) => {

    if (!props.isLoggedIn) {
        return <Navigate to="/auth"/>
    }

    return (
        <div className="main-body">
            <div className={isMobile() ? 'main-body-inputs-mobile' : 'main-body-inputs'}>
                <Graph/>
                <CoordinatesForm/>
            </div>
            <div className="main-body-data-table">
                <DataTable/>
            </div>
            <div className="footer-helper"></div>
        </div>
    )
};

const mapStateToMainBodyProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToMainBodyProps)(MainBody);
