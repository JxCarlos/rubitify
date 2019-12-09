import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";

import { history } from "../helpers";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
					
        </Switch>
      </Router>
    );
  }
}

export default Routes;
