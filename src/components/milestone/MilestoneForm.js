import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {addMilestone} from "../../modules/MilestoneDataManager";
import "./MilestoneForm.css";

export const MilestoneForm = () => {

const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

const [milestone, setMilestone] = useState({
    image:"",
    month:"",
    milestone:"",
    userId: parseInt(currentUser)
});
const history= useHistory();

const handleControlledInputChange= (event) => {
    const newMilestone= {...milestone}
    let selectedVal= event.target.value
    if(event.target.id.includes("Id")) {
        selectedVal=parseInt(selectedVal)
    }

    newMilestone[event.target.id] = selectedVal
    setMilestone(newMilestone)
}

useEffect(() => {

}, []);

const handleClickSaveEat = (event) => {
    event.preventDefault()

    const newMilestoneObject= {
        image: milestone.image, 
        month: milestone.month, 
        milestone: milestone.milestone,
        userId: milestone.userId
    }

    addMilestone(newMilestoneObject)
    .then(() => history.push("/milestones"))
}

return(
    <form className="milestoneform">
        <h2 className= "milestoneform_title"> Milestone</h2>

        <fieldset>
            <div className="form-group">
                <label htmlFor="image"> Image: </label>
                <input type= "text" id="image" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="image.." value={milestone.image}/>
                </div>
        </fieldset>

<fieldset>
<div className="form-group">
                <label htmlFor="month"> Month: </label>
                <input type= "text" id="month" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="month.." value={milestone.month}/>
                </div>
</fieldset>

<fieldset>
<div className="form-group">
                <label htmlFor="milestone"> Milestone: </label>
                <input type= "text" id="milestone" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="milestone.." value={milestone.milestone}/>
                </div>
</fieldset>


<button type= "button" className="save-btn" onClick={handleClickSaveEat}>Save Milestone</button>
    </form>




);
}