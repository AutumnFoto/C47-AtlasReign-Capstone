import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {addSleep} from "../../../modules/HomeDataManager";
import "./SleepForm.css";

export const SleepForm = () => {

const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

const [sleep, setSleep] = useState({

  timeofday: "",
  hours:"",
  userId: parseInt(currentUser)

});

// const [isLoading, setIsLoading] = useState(false)

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
        userId: sleep.userId
    }

    addSleep(newSleepObj)
    .then(() => history.push("/sleep"))

}

return (
    <form className= "sleepform">
        <h2 className="sleepform_title"> Sleep</h2>

        <fieldset>
            <div className="form-group">
                <label htmlFor="timeofday">Time of Day:</label>
                <input type= "text" id="timeofday" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="time of the day.." value={sleep.timeofday} />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="hours">Hours:</label>
                <input type= "text" id="hours" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="how many hours.." value={sleep.hours} />
            </div>
        </fieldset>

        <button type= "button" className="btn btn-primary" onClick={handleClickSaveSleep}>Save Eat</button>
    </form>
)
}