import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { ProfilePage } from "./ProfilePage";
import { LoginPage } from "./LoginPage";
import React from "react";
import ReactDOM from "react-dom";
import { FrontPage } from "./FrontPage";
import { ListUsers } from "./ListUsers";
import { EditUser } from "./EditUser";
import { useLoading } from "./Hooks/UseLoading";
import { fetchJson } from "./Http";

export function Application() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/users">
          <ListUsers />
        </Route>
        <Route path="/edit">
          <EditUser />
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
