import './NotFound.scss'

import React from 'react';

const NotFound = (props) => {

    return (
        <div className="not-found-wrapper">
            <div className="tile">
                <h1 className="not-found-number">404</h1>
                <h2 className="not-found-text">Page not found</h2>
            </div>
        </div>
    );

};

export default NotFound;