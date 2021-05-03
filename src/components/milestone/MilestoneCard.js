import React from "react";
// import {useHistory} from "react-router-dom";
import "./MilestoneCard.css";

export const MilestoneCard = ({milestone}) => {
    // const history= useHistory()

    return(
        <div className= "milestone_card">
            <div className="milestonecard-content"></div>
            <img src={milestone.imageURL} alt="milestonepic" />
            <h3 className="milestone_month"> Month: {milestone.month}</h3>
            <div className="milestone_milestone">Milestone: {milestone.milestone}</div>
</div>
    )
}