import React from 'react';
import './styles/index.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Add from "./pages/Add";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route exact path='/add' component={Add}/>
            <Route exact path='/edit/:id' component={Edit}/>
        </BrowserRouter>
    );
};

export default App;