import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/login.js";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

  <a className="navbar-brand" href="#">Friendship</a>

  <ul class="navbar-nav">
    <li className="nav-item">
    <Link className="nav-link" to="/login">Login</Link>
    </li>


  </ul>
</nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
        <Login />
          </Route>
      </Switch>

    </div>
  </Router>
  );
}

export default App;
