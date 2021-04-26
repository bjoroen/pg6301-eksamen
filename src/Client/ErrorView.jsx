import React from "react";
import { Link } from "react-router-dom";

export function ErrorView({ error }) {
  if (error.status === 401) {
    return (
      <div>
        You are not logged in.{" "}
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    );
  }
  return <div>An error has occurred: {error.toString()}</div>;
}
