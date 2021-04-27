import React from "react";
import { ProfilePage } from "./profilePage";
import { useLoading } from "./useLoading";
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
  console.log(data);

  return (
    <div id="frontPage">
      <ProfilePage id="profile" username={username} email={email} />
      <Chat id="chat" />
    </div>
  );
}
