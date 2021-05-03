import React from "react"
import { Route } from "react-router-dom";
import {ProfileList} from "../components/profile/ProfileList";
import {ProfileForm} from "./profile/ProfileForm";
import {ProfileEditForm} from "./profile/ProfileEditForm";


export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                {/* render component for home */}
            </Route>

            <Route exact path= "/profiles">
                <ProfileList />
            </Route>

        <Route exact path="/profiles/create">
            <ProfileForm />
        </Route>

        <Route exact path= "/profiles/:profileId(\d+)/edit">
            <ProfileEditForm />
        </Route>




        </>       
    ) 

}