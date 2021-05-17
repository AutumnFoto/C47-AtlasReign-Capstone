import React from "react";
import  "reactstrap";

import {useHistory} from "react-router-dom";
import "./MilestoneCard.css";

export const MilestoneCard = ({milestone, handleDeleteMilestone}) => {
    const history= useHistory()

    return(
        <div className= "milestone_card">
            <div className="milestonecard-content"></div>
            <img className= "milestonepic" src={milestone.image} alt="milestonepic" />
            <h3 className="milestone_month"> Month: {milestone.month}</h3>
            <div className="milestone_milestone">Milestone: {milestone.milestone}</div>

            <button className="edit-btn" type="button" onClick={() => history.push(`/milestone/${milestone.id}/edit`)}>Edit</button>

<button className="delete-btn" type="button" onClick={() => handleDeleteMilestone(milestone.id)}>Trash</button>
        </div>
    )
}

