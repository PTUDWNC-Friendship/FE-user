import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes/index';
import Header from './components/header/header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
