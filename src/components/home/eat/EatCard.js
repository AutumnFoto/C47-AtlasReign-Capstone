import React from "react";
import {useHistory} from "react-router-dom";
import "./EatCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";


export const EatCard = ({eat, handleDeleteEat}) => {
    const history= useHistory()

    return (
        <div className="eat_card">
            <div className="eat_food"><b>Food: </b>{eat?.food}</div>

            <div className="eat_drink"><b>Drink: </b>{eat?.drink}</div>

            <div className="eat_snack"><b>Snack: </b>{eat?.snack}</div>

            <div className= "eat_date"><b>Date:</b> {eat?.timestamp}</div>

<button className="edit-btn" type="button" onClick={() => history.push(`/eat/${eat?.id}/edit`)}>Edit    <FontAwesomeIcon icon={faEdit} size="1x" className="edit"/></button>

<button className= "delete-btn" type= "button" onClick={() => handleDeleteEat(eat?.id)}>Trash  <FontAwesomeIcon icon={faTrash} size="1x" className="trash"/></button>
        </div>
    )
}