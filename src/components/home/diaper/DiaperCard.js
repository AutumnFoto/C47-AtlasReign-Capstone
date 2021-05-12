import React from "react";
import {useHistory} from "react-router-dom";
import "./DiaperCard.css";

export const DiaperCard= ({diaper, handleDeleteDiaper}) => {
    const history= useHistory()

    return (

        <div className= "diaper_card">
            <div className="diaper_time"> Date: {diaper.timestamp}</div>

            <div className= "diaper_diaper">Diaper: {diaper.diaper}</div>

            <button className="edit-btn" type="button" onClick={() => history.push(`/diaper/${diaper.id}/edit`)}>Edit</button>

            <button className="delete-btn" type="button" onClick={() => handleDeleteDiaper(diaper.id)}>Trash</button>
</div>

);

}