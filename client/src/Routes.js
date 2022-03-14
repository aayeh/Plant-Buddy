import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Plants from "./pages/Plants";
import Home from "./pages/Home";
import history from './pages/history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Plants" component={Plants} />
    
                </Switch>
            </Router>
        )
    }
}