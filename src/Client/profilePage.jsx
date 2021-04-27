import React from "react";
import { AddNewUsers } from "./addNewUsers";

export function ProfilePage(props) {
  return (
    <div id="profile">
      <h1>Your Profile</h1>
      <div>{props.username}</div>
      <div>{props.email}</div>
      <AddNewUsers />
    </div>
  );
}
