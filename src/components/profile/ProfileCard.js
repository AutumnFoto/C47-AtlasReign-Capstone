import React from 'react';
import "./ProfileCard.css";


export const ProfileCard = ({profile}) => {
    return(
        <div className="profile_card">
            <div className= "profilecard-content">
                <img src= {profile.imageURL} alt="profilepic"/>
                <h3 className="profile_name">Name:{profile.name}</h3>
                <div className="profile_dob">DOB:{profile.dob}</div>

                <button type="button" className="button">Edit</button>
            </div>
        </div>

    )
}