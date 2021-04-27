import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { ProfilePage } from "./profilePage";
import { LoginPage } from "./loginPage";
import React from "react";
import ReactDOM from "react-dom";
import { FrontPage } from "./FrontPage";

export function Application() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
