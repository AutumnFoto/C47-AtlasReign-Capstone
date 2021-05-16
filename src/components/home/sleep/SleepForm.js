import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {addSleep} from "../../../modules/HomeDataManager";
import "./SleepForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSave} from "@fortawesome/free-solid-svg-icons";

export const SleepForm = () => {

const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"));

const timeStamp= Date.now();

const [sleep, setSleep] = useState({

  timeofday: "",
  hours:"",
  timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp),
  userId: parseInt(currentUser)

});

const history= useHistory();

const handleControlledInputChange= (event) => {
    const newSleep = {...sleep}
    let selectedVal= event.target.value
    if(event.target.id.includes("Id")) {
        selectedVal= parseInt(selectedVal)
    }
    newSleep[event.target.id] = selectedVal
    setSleep(newSleep)
}

useEffect(() => {

}, []);

const handleClickSaveSleep= (event) => {
    event.preventDefault()

    const newSleepObj = {
        timeofday: sleep.timeofday,
        hours: sleep.hours,
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp),
        userId: sleep.userId
    }

    addSleep(newSleepObj)
    .then(() => history.push("/"))

}

return (
    <form className= "sleepform">
        <h2 className="sleepform_title"> Sleep Form</h2>

        <fieldset className="sleep_form">
            <div className="form-group">
                <label htmlFor="timeofday">Time of Day:</label>
                <input type= "text" id="timeofday" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="time of the day.." value={sleep.timeofday} />
            </div>
        
       
            <div className="form-group">
                <label htmlFor="hours">Hours:</label>
                <input type= "text" id="hours" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="how many hours.." value={sleep.hours} />
            </div>
        </fieldset>

        <button type= "button" className="save-btn" onClick={handleClickSaveSleep}>SAVE <FontAwesomeIcon icon={faSave} size="1x" className="save"/></button>
    </form>
)
}