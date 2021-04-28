import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import { FrontPage } from "./FrontPage";
import { ListUsers } from "./ListUsers";
import { EditUser } from "./EditUser";

export function Application() {
  return (
    <BrowserRouter>
      <Switch>
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
