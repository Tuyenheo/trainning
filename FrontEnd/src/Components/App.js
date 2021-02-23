import React, { Component } from 'react'
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import routes from '../Router/router';
import './../Css/App.css';
import Footer from './Footer';
import Header from './Header.js';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class App extends Component {
  
  showRouter = (route) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route,index) => {
        return (
          <Route
            key = {index}
            path = {route.path}
            exact = {route.exact}
            component = {route.component}
            history = {history}
            // match = {match}
          ></Route>
        );
      })
    }
    return <Switch>{result}</Switch>
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
          <main className="container">
            {this.showRouter(routes)}
          </main>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
