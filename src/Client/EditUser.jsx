import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useLoading } from "./Hooks/UseLoading";
import { crudJson, fetchJson } from "./Http";
import { ErrorView } from "./ErrorView";
import { LoadingView } from "./LoadingView";
import { InputField } from "./InputField";
import { useSubmit } from "./Hooks/UseSubmit";

export function EditUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const { loading, error, data } = useLoading(() =>
    fetchJson(`/api/users/${id}`)
  );

  const { handleSubmit: onSubmit, submitting } = useSubmit(
    async () => {
      await crudJson(`/api/users/${id}`, "PUT", { username, password, email });
    },
    () => history.push("/")
  );

  if (error) {
    return <ErrorView error={error} />;
  }

  if (loading || !data) {
    return <LoadingView />;
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Edit the user {data.username}</h1>
      <InputField label={"Name"} value={username} onValueChange={setUsername} />
      <InputField label={"Email"} value={email} onValueChange={setEmail} />
      <InputField
        label={"password"}
        value={password}
        onValueChange={setPassword}
      />
      <button>submit</button>
    </form>
  );
}
