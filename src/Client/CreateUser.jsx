import React, { useState } from "react";
import { InputField } from "./InputField";
import { useSubmit } from "./Hooks/UseSubmit";
import { postJson } from "./Http";
import { Link } from "react-router-dom";

export function CreateUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { handleSubmit: handleCreating, submitting, error } = useSubmit(
    async () => {
      await postJson("/api/login", { username, password, email });
    },
    () => {
      setUsername("");
      setEmail("");
      setPassword("");
    }
  );

  return (
    <div>
      <h1>Create new user</h1>
      <form onSubmit={handleCreating}>
        {submitting && <div>Please wait</div>}
        {error && <div>Error: {error.toString()}</div>}
        <InputField
          label={"Username"}
          value={username}
          onValueChange={setUsername}
        />
        <InputField
          label={"Password"}
          value={password}
          onValueChange={setPassword}
        />
        <InputField label={"Email"} value={email} onValueChange={setEmail} />

        <button disabled={submitting}>Create user</button>
      </form>
      <Link to="users">See all users</Link>
    </div>
  );
}
