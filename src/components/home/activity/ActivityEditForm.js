import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {updateActivity, getActivitybyId} from "../../../modules/HomeDataManager";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUndo} from "@fortawesome/free-solid-svg-icons";
import "./ActivityEditForm.css"

export const ActivityEditForm = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"));

    const timeStamp= Date.now();

    const [activity, setActivity] = useState({
        activity:"",
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
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
            timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
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
            <fieldset className="activity_form">
                <div className= "activityeditform">
                    <label htmlFor="activity">Activity: </label>
                    <input type="text" required className="form-control" onChange={handleFieldChange} id="activity" value= {activity.activity} />
                    </div>

                    
            <Link to= {`/`}>
                        <button className="returnbtn">GO BACK
                        
                        <FontAwesomeIcon icon={faUndo} size="1x" className="undo"/>
                        
                        </button>
                        </Link>

                        <div className= "submit">
                            <button type="button" disabled={isLoading} onClick={updateExistingActivity} className="submitbtn">SUBMIT
                            </button>
                            </div>
                </fieldset>
        </form>
        </>
    );

};