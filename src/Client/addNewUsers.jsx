import React, { useState } from "react";
import { InputField } from "./inputField";
import { useSubmit } from "./useSubmit";
import { postJson } from "./Http";
import { ListOfUsers } from "./ListOfUsers";

export function AddNewUsers() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { handleSubmit: handleCreating, submitting, error } = useSubmit(
    async () => {
      await postJson("/api/login", { username, password, email });
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
      <ListOfUsers />
    </div>
  );
}
