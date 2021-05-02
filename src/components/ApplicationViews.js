import React from "react"
import { Route } from "react-router-dom";
import {ProfileList} from "../components/profile/ProfileList";
import {ProfileForm} from "./profile/ProfileForm";


export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                {/* render component for home */}
            </Route>

            <Route path= "/profiles">
                <ProfileList />
            </Route>

        <Route path="/profiles/create">
            <ProfileForm />
        </Route>
        </>       
    ) 

}