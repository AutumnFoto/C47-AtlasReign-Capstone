import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {addActivity} from "../../../modules/HomeDataManager";
import "./ActivityForm.css";

export const ActivityForm = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

const [activity, setActivity] = useState({
    activity:"",
    userId: parseInt(currentUser)
});

const [isLoading, setIsLoading] = useState(false)

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
        userId: activity.userId
    }

    addActivity(newActivityObj)
    .then(() =>history.push("/activity"))
}

return (
    <form className= "activityform">
        <h2 className="activityform_title">Activity</h2>

        <fieldset>
        <div className="form-group">
        <label htmlFor="activity">Activity:</label>
        <input type="text" id="activity" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="activity..." value={activity.activity}/>
        </div>
        </fieldset>

        <button type="button" className="btn btn-primary" onClick={handleClickSaveActivity}> Save Activity</button>
    </form>
)

}