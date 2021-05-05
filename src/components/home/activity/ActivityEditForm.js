import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {updateActivity, getActivitybyId} from "../../../modules/HomeDataManager";

export const ActivityEditForm = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [activity, setActivity] = useState({
        activity:"",
        userId: parseInt(currentUser)
    })

    const [isLoading, setIsLoading] = useState(false);

    const {activityId} = useParams();

    const history= useHistory();

    const handleFieldChange= (event) => {
        const stateToChange= {...activity};

        stateToChange[event.target.id] = event.target.value;

        setActivity(stateToChange);
    };

    const updateExistingActivity = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedActivity= {
            id: activityId,
            activity: activity.activity,
            userId: activity.userId
        };

        updateActivity(editedActivity)
        .then(() => history.push("/"))
    }

    useEffect(() => {
        getActivitybyId(activityId)
        .then(activity => {
            setActivity(activity);
            setIsLoading(false)
        })
    }, [])

    return(
        <>
        <form>
            <fieldset>
                <div className= "activityeditform">
                    <label htmlFor="activity">Activity: </label>
                    <input type="text" required className="form-control" onChange={handleFieldChange} id="activity" value= {activity.activity} />
                    </div>

                    <Link to= {`/`}>
                        <button className="btn-primary">Go Back</button>
                        </Link>

                        <div className= "submit">
                            <button type="button" disabled={isLoading} onClick={updateExistingActivity} className="btn-primary">Submit
                            </button>
                        </div>
                    
                
            </fieldset>
        </form>
        </>
    );

};