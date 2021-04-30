import React from 'react';
import "./ProfileCard.css";

export const ProfileCard = ({profiles}) => {
    return(
        <div className="profile_card">
            <div className= "profilecard-content">
                <img src= {profiles.image} alt="profilepic"/>
                <h3 className="profile_name">Name {profiles.name}</h3>

                <button type="edit">Edit</button>
            </div>
        </div>
    )
}