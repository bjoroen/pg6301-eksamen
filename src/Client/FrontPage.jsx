import React from "react";
import { ProfilePage } from "./ProfilePage";
import { useLoading } from "./Hooks/UseLoading";
import { fetchJson } from "./Http";
import { ErrorView } from "./ErrorView";
import { LoadingView } from "./LoadingView";
import { Chat } from "./Chat";

export function FrontPage() {
  const { loading, error, data } = useLoading(() => fetchJson("/api/profile"));

  if (error) {
    return <ErrorView error={error} />;
  }

  if (loading || !data) {
    return <LoadingView />;
  }

  const { username, email } = data;

  return (
    <div id="frontPage">
      <ProfilePage id="profile" username={username} email={email} />
      <Chat username={username} id="chat" />
    </div>
  );
}
