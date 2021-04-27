import React from "react";

export function ErrorView({ error }) {
  if (error.status === 401) {
    return (
      <div>
        <h1>Please log into to our fantastic app</h1>
        <a href={"/api/login"} target={"_self"}>
          <button>Login</button>
        </a>
      </div>
    );
  }
  return <div>An error has occurred: {error.toString()}</div>;
}
