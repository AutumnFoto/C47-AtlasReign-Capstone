import React from "react";
import {useHistory} from "react-router-dom";
import "./SleepCard.css";

export const SleepCard = ({sleep, handleDeleteSleep}) => {
    const history= useHistory()

    return(

        <div className="sleep_card">
            <div className= "sleep_time"> Time of Day: {sleep.timeofday}</div>

            <div className= "sleep_hours">Hours: {sleep.hours}</div>

        <button className="edit-btn" type="button" onClick={() => history.push(`/sleep/${sleep?.id}/edit`)}>Edit</button>

            <button className="delete-btn" type="button" onClick={() => handleDeleteSleep(sleep?.id)}>Trash</button>
        </div>




    )





}