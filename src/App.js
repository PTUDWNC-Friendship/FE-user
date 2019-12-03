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
import RegisterStudent from './components/register/register-student.js';
import RegisterTutor from './components/register/register-tutor.js';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register-student">
          <RegisterStudent />
        </Route>
        <Route path="/register-tutor">
          <RegisterTutor />
        </Route>
        <Route path="/">
        <Login />
          </Route>
      </Switch>

  </Router>
  );
}

export default App;
