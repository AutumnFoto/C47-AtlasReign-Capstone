import React from "react";
import  "reactstrap";

// import {useHistory} from "react-router-dom";
import "./MilestoneCard.css";

export const MilestoneCard = ({milestones, handleDeleteMilestone}) => {
    // const history= useHistory()

    return(
        <div className= "milestone_card">
            <div className="milestonecard-content"></div>
            <img className= "milestonepic" src={milestones.image} alt="milestonepic" />
            <h3 className="milestone_month"> {milestones.month}</h3>
            <div className="milestone_milestone">{milestones.milestone}</div>
            
            <div className="milestone_warning"> <b>Red Flags:</b> {milestones.warning}</div>

            {/* <button className="edit-btn" type="button" onClick={() => history.push(`/milestones/${milestones.id}/edit`)}>Edit</button>

<button className="delete-btn" type="button" onClick={() => handleDeleteMilestone(milestones.id)}>Trash</button> */}
        </div>
    )
}

