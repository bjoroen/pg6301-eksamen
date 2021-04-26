import React from "react";
import { Link } from "react-router-dom";

export function ErrorView({ error }) {
  if (error.status === 401) {
    return (
      <div>
        You are not logged in.{" "}
        <a href={"/api/login"} target={"_self"}>
          <button>Login</button>
        </a>
      </div>
    );
  }
  return <div>An error has occurred: {error.toString()}</div>;
}
