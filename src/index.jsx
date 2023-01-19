import './style/main.scss'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

root.render(
    <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)
