import React from "react";
import {useHistory} from "react-router-dom";
import "./ActivityCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

export const ActivityCard= ({activity, handleDeleteActivity}) => {
    const history= useHistory()

    return(
        <div className="activity_card">
            <div className= "activity_activity"><b>Activity:</b> {activity?.activity}</div>
            <div className= "activity_date"><b>Date: </b>{activity?.timestamp}</div>

            <button className="edit-btn" type="button" onClick={() => history.push(`/activity/${activity?.id}/edit`)}> Edit  <FontAwesomeIcon icon={faEdit} size="1x" className="edit"/>
            </button>

            <button className="delete-btn" type="button" onClick={() => handleDeleteActivity(activity?.id)}> Trash <FontAwesomeIcon icon={faTrash} size="1x" className="trash"/>
            
            </button>

</div>
    )

}
