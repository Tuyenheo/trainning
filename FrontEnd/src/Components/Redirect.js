import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './Home';
import NewBook from './NewBook'
class Redirect extends Component {
    render() {
        return (
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/newbook">
                    <NewBook />
                  </Route>
                </Switch>
              </Router>
        )
    }
}
export default Redirect;