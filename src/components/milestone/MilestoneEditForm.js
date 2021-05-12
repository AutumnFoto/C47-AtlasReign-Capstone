import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {updateMilestone , getMilestoneById} from "../../modules/MilestoneDataManager";

export const MilestoneEditForm = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [milestone, setMilestone] = useState({
        imageURL:"",
        month:"",
        milestone:"",
        userId: parseInt(currentUser)
    });

    const [isLoading, setIsLoading] = useState(false);

    const {milestoneId} = useParams();
    const history= useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = {...milestone};
        stateToChange[event.target.id] = event.target.value;

        setMilestone(stateToChange);
    };

    const updateExisitingMilestone = (event) => {
        event.preventDefault() 
        setIsLoading(true);

        const editedMilestone = {
            id: milestoneId,
            imageURL: milestone.imageURL, 
            month: milestone.month, 
            milestone: milestone.milestone,
            userId: milestone.userId
            
            };

            updateMilestone(editedMilestone)
            .then(() => history.push("/milestones")

            )

    }

useEffect(() => {
    getMilestoneById(milestoneId)
    .then(milestone=> {
        setMilestone(milestone);
        setIsLoading(false)
    })
}, [])

return (
    <>
    <form>
        <fieldset>
            <div className="editform">
            <label htmlFor="image">Image:</label>
            <input type="text" required className="form-control" onChange={handleFieldChange} id="imageURL" value={milestone.imageURL} />

            <label htmlFor="month">Month:</label>
            <input type="text" required className="form-control" onChange={handleFieldChange} id="month" value={milestone.month} />

            <label htmlFor= "time">Time:</label>
            <input type= "text" required className="form-control" onChange={handleFieldChange} id="time" value={milestone.milestone} />
            </div>

            <Link to = {`/`}>
            <button className= "btn-primary">Go Back</button>
            </Link>

            <div className="submit">
                <button type="button" disabled={isLoading} onClick={updateExisitingMilestone} className="btn-primary">Submit</button>
            </div>
        </fieldset>
    </form>
    </>
);

};