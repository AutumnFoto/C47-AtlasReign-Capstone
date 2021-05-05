import React, {useState, useEffect} from "react";
import {ActivityCard} from "./ActivityCard";
import {updateActivity, getAllActivities, deleteActivity} from "../../../modules/HomeDataManager";
import {useHistory} from "react-router-dom";
import "./ActivityList.css";

export const ActivityList = () => {

const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

const [activity, setActivity] = useState([]);

const getActivity = () => {
    return getAllActivities()
    .then(activityFromAPI => {
        setActivity(activityFromAPI)
    });
};

const history= useHistory();

const handleDeleteActivity = id => {
    deleteActivity(id)
    .then(() => getAllActivities()).then(setActivity)
}

const handleUpdateActivity = (activity) => {
    let updatedActivity = {...activity}

    const editedActivityUpdate= {
        id: updatedActivity.id, 
        activity: updatedActivity.activity,
        userId: currentUser
    }

    updateActivity(editedActivityUpdate)
    .then(() => getActivity())
}

useEffect(() => {
    getActivity();
}, []);

return(
    <>
    {/* <section className="activitysection-content">
        <button type="button" className= "addactivity-btn" onClick={() =>{history.push("activity/create")}}> Activity
  </button>
    </section> */}

    <div className="container-activitycards">
        {activity.map(activity => 
            <ActivityCard
            key={activity.id}
            activity={activity}
            handleUpdateActivity={handleUpdateActivity}
            handleDeleteActivity={handleDeleteActivity}
            />
            
            )}
    </div>
    </>
);
};