import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes/index';
import Header from './components/header/header';

import Footer from './components/footer/footer';
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
              render={route.render}
              component={route.main}
            />
          );
        })}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
