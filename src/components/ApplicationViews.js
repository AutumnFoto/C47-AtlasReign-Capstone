import React from "react"
import { Route } from "react-router-dom";
import {ProfileList} from "../components/profile/ProfileList";


export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                {/* render component for home */}
            </Route>

            <Route path= "/profiles">
                <ProfileList />
            </Route>

        
        </>       
    ) 

}