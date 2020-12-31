import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginPage from '../containers/LoginPage/loadable'

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login"/>}/>
      <Route path="/login" component={LoginPage}/>
    </Switch>
  </BrowserRouter>
)
