import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Link} from "react-router-dom";
import {Route} from "react-router";
import {ProfilePage} from "./profilePage";

function LoginPage() {
    return null;
}

function FrontPage() {
    return <div>
        <h1>Welcome</h1>
        <ul>
            <li><Link to="/Profile"> Profile </Link></li>
            <li><Link to="/login"> Login </Link></li>
        </ul>
    </div>
}

function Application(){
    return <BrowserRouter>
        <header>
            <Link to="/"> Front Page</Link>
        </header>
        <switch>
            <Route path="/profile">
                <ProfilePage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/">
                <FrontPage />
            </Route>
            <Route>
                <h1>404 Not Found</h1>
            </Route>
        </switch>

    </BrowserRouter>
}


ReactDOM.render(<Application />, document.getElementById("root"))