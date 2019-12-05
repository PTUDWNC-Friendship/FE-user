import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      })}
    </Switch>
  );
}

export default App;
