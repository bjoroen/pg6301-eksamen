import React from "react";

export function ErrorView({error}) {
    return <div>An error has occurred: {error.toString()}</div>
}