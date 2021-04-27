import React, { useEffect, useState } from "react";
import { useLoading } from "./useLoading";
import { fetchJson } from "./Http";
import { LoadingView } from "./LoadingView";
import { ErrorView } from "./ErrorView";

export function ListOfUsers() {
  const { loading, error, data } = useLoading(() => fetchJson("/api/users"));
  const [users, setUsers] = useState([]);

  if (error) {
    return <ErrorView error={error} />;
  }

  if (loading || !data) {
    return <LoadingView />;
  }

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <>
      <h1>List users</h1>
      {data.map(({ username, email, password, id }) => (
        <div key={id}>
          <h1>{username}</h1>
          <li>{email}</li>
          <li>{password}</li>
        </div>
      ))}
    </>
  );
}
