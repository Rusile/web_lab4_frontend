import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthBody from "./components/AuthBody/AuthBody";
import MainBody from "./components/MainBody/MainBody";
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <Routes>
                    <Route path="/main" element={<MainBody/>}/>
                    <Route path="/auth" element={<AuthBody/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </div>
        </Provider>
    );
};

export default App;