import React from 'react';
import {useHistory} from "react-router-dom";
import "./ProfileCard.css";


export const ProfileCard = ({profile}) => {
    const history= useHistory()

    return(
        <div className="profile_card">
            <div className= "profilecard-content">
                <img src= {profile.imageURL} alt="profilepic"/>
                <h3 className="profile_name">Name:{profile.name}</h3>
                <div className="profile_dob">DOB:{profile.dob}</div>
                </div>
                <button className= "edit-btn" type="button" onClick={() => history.push(`/profiles/${profile.id}/edit`)}>Edit</button>
        </div>

    )
}