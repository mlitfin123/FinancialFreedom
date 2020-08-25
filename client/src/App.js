import React, { Component } from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Chart from "./component/chart";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/" component={LogIn}/>
      <Route exact path="/charts" component={Chart} />
      </div>
      </Router>
    );
  }
}

export default App;
