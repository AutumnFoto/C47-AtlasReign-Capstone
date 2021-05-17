import React from "react"
import { Route } from "react-router-dom";
import {ProfileList} from "../components/profile/ProfileList";
import {ProfileForm} from "./profile/ProfileForm";
import {ProfileEditForm} from "./profile/ProfileEditForm";
import {EatList} from "../components/home/eat/EatList";
import {EatForm} from "./home/eat/EatForm";
import {EatEditForm} from "./home/eat/EatEditForm";
import {ActivityList} from "./home/activity/ActivityList";
import {ActivityForm} from "./home/activity/ActivityForm";
import {ActivityEditForm} from "./home/activity/ActivityEditForm";
import {HomeButtons} from "./home/buttons";
import {SleepList} from "./home/sleep/SleepList";
import {SleepForm} from "./home/sleep/SleepForm";
import {SleepEditForm} from "./home/sleep/SleepEditForm";
import {DiaperList} from "./home/diaper/DiaperList";
import {DiaperForm} from "./home/diaper/DiaperForm";
import {DiaperEditForm} from "./home/diaper/DiaperEditForm";
// import { MilestoneList} from "./milestone/MilestoneList";
import {MilestoneForm} from "./milestone/MilestoneForm";
import {MilestoneEditForm} from "./milestone/MilestoneEditForm";
import { MilestoneCard} from "./milestone/MilestoneCard";

export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                <HomeButtons />
                <EatList />
                <ActivityList/>
                 <SleepList />
                 <DiaperList />
                 
             </Route>

             <Route exact path= "/milestones">
                <MilestoneCard />
            </Route>


             <Route exact path= "/milestone/create">
                <MilestoneForm />
            </Route>

            <Route exact path= "/milestone/:milestoneId(\d+)/edit">
                <MilestoneEditForm />
            </Route>


             <Route exact path= "/diaper/create">
                <DiaperForm />
            </Route>

            <Route exact path= "/diaper/:diaperId(\d+)/edit">
                <DiaperEditForm />
            </Route>

         <Route exact path= "/sleep/create">
                <SleepForm />
            </Route>

            <Route exact path= "/sleep/:sleepId(\d+)/edit">
                <SleepEditForm />
            </Route>

            <Route exact path= "/eat/create">
                <EatForm />
            </Route>
            
            <Route exact path= "/eat/:eatId(\d+)/edit">
                <EatEditForm />
            </Route>

            <Route exact path= "/activity/create">
                <ActivityForm />
            </Route>

            <Route exact path= "/activity/:activityId(\d+)/edit">
                <ActivityEditForm />
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