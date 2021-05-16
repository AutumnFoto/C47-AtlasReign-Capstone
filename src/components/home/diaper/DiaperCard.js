import React from "react";
import {useHistory} from "react-router-dom";
import "./DiaperCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

export const DiaperCard= ({diaper, handleDeleteDiaper}) => {
    const history= useHistory()

    return (

        <div className= "diaper_card">
            <div className= "diaper_diaper"><b>Diaper: </b>{diaper.diaper}</div>

            <div className="diaper_time"><b> Date:</b> {diaper.timestamp}</div>

          <button className="edit-btn" type="button" onClick={() => history.push(`/diaper/${diaper.id}/edit`)}> Edit   <FontAwesomeIcon icon={faEdit} size="1x" className="edit"/></button>

            <button className="delete-btn" type="button" onClick={() => handleDeleteDiaper(diaper.id)}> Trash <FontAwesomeIcon icon={faTrash} size="1x" className="trash"/></button>
</div>

);

}