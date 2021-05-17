import React, {useState, useEffect} from "react";
import {MilestoneCard} from "./MilestoneCard";
import "./MilestoneList.css";
import {updateMilestone, getAllMilestone, deleteMilestone} from "../../modules/MilestoneDataManager";
import {useHistory} from "react-router-dom";

export const MilestoneList = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [milestone, setMilestone] = useState([]);

    const getMilestone= () => {
        return getAllMilestone()
        .then(milestoneFromAPI => {
            setMilestone(milestoneFromAPI)
        });
    };
    const history= useHistory();
    
    const handleDeleteMilestone= id => {
        deleteMilestone(id)
        .then(() => getAllMilestone()).then(setMilestone)
    }

    const handleUpdateMilestone= (milestone) => {

        let updatedMilestone= {...milestone}

        const editMilestoneUpdate= {
            id: updatedMilestone.id,
            image: updatedMilestone.image,
            month: updatedMilestone.month,
            milestone: updatedMilestone.milestone,
            userId: currentUser
        }

        updateMilestone(editMilestoneUpdate)
        .then(() => getMilestone())
    }


    useEffect(() => {
        getMilestone();
    }, []);


return(
    <>
<section className= "milestonesection-content">
    <h2 className= "mile"> Milestones </h2>
         {/* <button type= "button" className="addmilestone-btn"
        // eslint-disable-next-line no-restricted-globals
        onClick={() => { history.push("/milestones/create")}}> Add Milestone</button>  */}
    </section>
    <div className="container-milestonecards">
        {milestone.map(milestone =>
        <MilestoneCard
        key={milestone.id}
        milestones={milestone}
        handleUpdateMilestone={handleUpdateMilestone}
        handleDeleteMilestone= {handleDeleteMilestone}
        />
            )}
    </div>
    </>
);
};