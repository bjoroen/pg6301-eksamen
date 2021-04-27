import React from "react";
import { useLoading } from "./useLoading";
import { fetchJson } from "./Http";
import { LoadingView } from "./LoadingView";
import { ErrorView } from "./ErrorView";

export function ProfilePage(props) {
  //const { username } = props.username;

  return (
    <div id="profile">
      <h1>Your Profile</h1>
      <div>{props.username}</div>
      <div>{props.email}</div>
    </div>
  );
}
