import React, { Component } from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Chart from "./component/chart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Home}/>
        {/* <p>HOME PAGE</p>
      </Route> */}
      <Route exact path="/charts" component={Chart} />
      </div>
      </Router>
    );
  }
}

export default App;
