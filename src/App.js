import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/login.js";
import Student from "./components/home/student.js";
import Tutor from "./components/home/tutor.js";
import './App.css';
import RegisterStudent from './components/register/register-student.js';
import RegisterTutor from './components/register/register-tutor.js';
import Logout from './components/logout/logout';

function App() {
  return (
    
    <Router>
      
      <Switch>
      <Route path="/logout">
          <Logout />
        </Route>
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
          <Student />
        </Route>
        <Route path="/student-home">
          <Student />
        </Route>
        <Route path="/tutor-home">
          <Tutor />
        </Route>
      </Switch>

  </Router>
  );
}

export default App;
