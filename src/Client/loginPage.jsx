import React, { useState } from "react";
import { InputField } from "./inputField";
import { postJson } from "./Http";

function useSubmit(submitFunction) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(undefined);
    try {
      await submitFunction();
    } catch (e) {
      setError(e);
    } finally {
      setSubmitting(false);
    }
  }

  return { handleSubmit, submitting, error };
}

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, submitting, error } = useSubmit(async () => {
    await postJson("/api/login", { username, password });
  });

  return (
    <div>
      <h1>Please log in</h1>
      <form onSubmit={handleLogin}>
        {submitting && <div>Please wait</div>}
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
        <button disabled={submitting}>Log in</button>
      </form>
    </div>
  );
}
