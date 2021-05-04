import React from "react"
import { Route } from "react-router-dom";
import {ProfileList} from "../components/profile/ProfileList";
import {ProfileForm} from "./profile/ProfileForm";
import {ProfileEditForm} from "./profile/ProfileEditForm";
import {EatList} from "../components/home/eat/EatList";
import {EatForm} from "./home/eat/EatForm";
import {EatEditForm} from "./home/eat/EatEditForm";

export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
              <EatList />
            </Route>

            <Route exact path= "/eat/create">
                <EatForm />
            </Route>
            
            <Route exact path= "/eat//:eatId(\d+)/edit">
                <EatEditForm />
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