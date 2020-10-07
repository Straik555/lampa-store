import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Phones from "./container/Phone";
import Basket from './container/Basket'

export default (
    <Router>
        <Switch>
            <Route exact path={'/'} component={Phones} />
            <Route exact path={'/basket'} component={Basket} />
        </Switch>
    </Router>
)