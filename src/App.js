import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./routes/index";
import "./App.css";

function App() {

  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index.id}
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
