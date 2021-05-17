import React from 'react';
import {useHistory} from "react-router-dom";
import "./ProfileCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit } from "@fortawesome/free-solid-svg-icons";


export const ProfileCard = ({profile}) => {
    const history= useHistory()

    return(
        <div className="profile_card">
            <div className= "profilecard-content">
                <img className="profilepic" src= {profile.image} alt="profilepic"/>
                
                <h3 className="profile_name">Name: {profile.name}</h3>
                <div className="profile_dob">DOB: {profile.dob}</div>
                </div>
                <button className= "edit-btn" type="button" onClick={() => history.push(`/profiles/${profile.id}/edit`)}>Edit   <FontAwesomeIcon icon={faEdit} size="1x" className="edit"/></button>
        </div>

    )
}