import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {updateSleep, getSleepbyId} from "../../../modules/HomeDataManager";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUndo} from "@fortawesome/free-solid-svg-icons";
import "./SleepEditForm.css";

export const SleepEditForm= () => {

    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"));

    const timeStamp= Date.now();

    const [sleep, setSleep] = useState({
        timeofday: "",
         hours:"",
         timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
         userId: parseInt(currentUser)
    })

    const [isLoading, setIsLoading] = useState(false)

    const {sleepId} = useParams();
    const history= useHistory();

    const handleFieldChange= (event) => {
        const stateToChange= {...sleep};
        stateToChange[event.target.id] = event.target.value;

        setSleep(stateToChange);
    };

    const updateExisitingSleep = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedSleep= {
            id: sleepId, 
            timeofday: sleep.timeofday,
            hours: sleep.hours,
            timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
            userId: sleep.userId
        };

        updateSleep(editedSleep)
        .then(() => history.push("/"))

    }

    useEffect(() => {
        getSleepbyId(sleepId)
        .then(sleep => {
            setSleep(sleep);
            setIsLoading(false)
        })
    }, [])

    return (
    <>
           <form>
<fieldset className="sleep_form">
    <div className="editform">
        <label htmlFor="timeofday">Time of Day:</label>
        <input type= "text" required className="form-control" onChange={handleFieldChange} id="timeofday" value={sleep.timeofday} />
    </div>

    <div className="editform">
        <label htmlFor="hours">Hours:</label>
        <input type= "text" required className="form-control" onChange={handleFieldChange} id="hours" value={sleep.hours} /></div>

        <Link to = {`/`}>
            <button className= "retun">Go Back
            <FontAwesomeIcon icon={faUndo} size="1x" className="undo"/> </button>
            </Link>

            <div className="submit">
                <button type="button" disabled={isLoading} onClick={updateExisitingSleep} className="submit">Submit</button>
            </div>
        </fieldset>
    </form>
    </>
);

};