import React from "react";
import { CreateUser } from "./CreateUser";

export function ProfilePage(props) {
  return (
    <div id="profile">
      <h1>Your Profile</h1>
      <div>{props.username}</div>
      <div>{props.email}</div>
      <CreateUser />
    </div>
  );
}
