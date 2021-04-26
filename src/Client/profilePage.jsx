import React from "react";
import {useLoading} from "./useLoading";
import {fetchJson} from "./Http";
import {LoadingView} from "./LoadingView";
import {ErrorView} from "./ErrorView";

export function ProfilePage() {
    const {loading, error, data} = useLoading( () => fetchJson("/api/profile"))

    if (error){
        return <ErrorView error={error} />
    }

    if (loading || !data){
        return <LoadingView />
    }

    const {username} = data


    return <div>
        <h1>Your Profile</h1>
        <div>Username: {username}</div>
    </div>
}