import React from "react"
import { Route } from "react-router-dom";
import {ProfileCard} from "../components/profile/ProfileCard";


export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                {/* render component for home */}
            </Route>

            <Route path= "/profiles">
                <ProfileCard />
            </Route>

        
        </>       
    ) 

}