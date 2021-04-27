import React, { useEffect, useState } from "react";
import { useLoading } from "./Hooks/UseLoading";
import { fetchJson } from "./Http";
import { LoadingView } from "./LoadingView";
import { ErrorView } from "./ErrorView";
import { Link } from "react-router-dom";

export function ListUsers() {
  const { loading, error, data } = useLoading(() => fetchJson("/api/users"));

  if (error) {
    return <ErrorView error={error} />;
  }

  if (loading || !data) {
    return <LoadingView />;
  }

  return (
    <>
      <h1>List users</h1>
      {data.map(({ username, email, password, id }) => (
        <div key={id}>
          <h1>{username}</h1>
          <li>{email}</li>
          <li>{password}</li>
          <Link to={`/edit?id=${id}`}>
            <button>Edit this user</button>
          </Link>
        </div>
      ))}
    </>
  );
}
