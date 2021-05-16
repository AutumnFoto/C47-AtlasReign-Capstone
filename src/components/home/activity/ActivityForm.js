import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {addActivity} from "../../../modules/HomeDataManager";
import "./ActivityForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSave} from "@fortawesome/free-solid-svg-icons";

export const ActivityForm = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"));

const timeStamp= Date.now();

const [activity, setActivity] = useState({
    activity:"",
    timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp),
    userId: parseInt(currentUser)
});


const history= useHistory();

const handleControlledInputChange= (event) => {
    const newActivity= {...activity}
    let selectedVal= event.target.value 

    if(event.target.id.includes("Id")) {
        selectedVal= parseInt(selectedVal)
    }

    newActivity[event.target.id] = selectedVal
    setActivity(newActivity)
}

useEffect(() => {

}, []);

const handleClickSaveActivity = (event) => {
    event.preventDefault()

    const newActivityObj= {
        activity: activity.activity,
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
        userId: activity.userId
    }

    addActivity(newActivityObj)
    .then(() =>history.push("/"))
}

return (
    <form className= "activityform">
        <h2 className="activityform_title">Activity Form</h2>

        <fieldset className= "activity_form">
        <div className="form-group">
        <label htmlFor="activity">Activity: </label>
        <input type="text" id="activity" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="activity..." value={activity.activity}/>
        </div>
        </fieldset>

        <button type="" className="save-btn" onClick={handleClickSaveActivity}> SAVE   <FontAwesomeIcon icon={faSave} size="1x" className="save"/></button>
    </form>
)

}