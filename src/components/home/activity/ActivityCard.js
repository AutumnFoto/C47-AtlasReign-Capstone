import React from "react";
import {useHistory} from "react-router-dom";
import "./ActivityCard.css";

export const ActivityCard= ({activity, handleDeleteActivity}) => {
    const history= useHistory()

    return(
        <div className="activity_card">
            <div className= "activity_activity"><b>Activity:</b> {activity?.activity}</div>
            <div className= "activity_date"><b>Date: </b>{activity?.timestamp}</div>

            <button className="edit-btn" type="button" onClick={() => history.push(`/activity/${activity?.id}/edit`)}>Edit</button>
            <button className="delete-btn" type="button" onClick={() => handleDeleteActivity(activity?.id)}>Trash</button>

</div>
    )

}
