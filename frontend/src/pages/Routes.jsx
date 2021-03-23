import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import About from './About';
import Home from './Home';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />

            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
)