import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from "./pages/Home"
import Chart from "./component/chart";
import LogIn from "./pages/LogIn";
import BudGet from "./pages/BudGet";
import Dashboard from "./pages/DashBoard";
import Investments from "./pages/Investments";
import { useFirebaseAuth } from "use-firebase-auth"

import "./App.css";

function App() { 
  const { user, loading, error } = useFirebaseAuth()
    return (
      <Router>
      <div className="App">
      {user && <Switch>   
      <Route exact path="/" component={Home} />
      <Route exact path="/LogIn" component={LogIn} />
      <Route exact path="/BudGet" component={BudGet} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/Investments" component={Investments} />
      <Route exact path="/chart" component={Chart} />
      </Switch>}
      {!user && <Switch> 
      <Route exact path="/" component={Home} />
      <Route exact path="/LogIn" component={Home} />
      <Route exact path="/BudGet" component={Home} />
      <Route exact path="/Dashboard" component={Home} />
      <Route exact path="/Investments" component={Home} />
      <Route exact path="/chart" component={Home} />
      </Switch>}
      </div> 
      </Router>
    );
  }


export default App;
