import React, {useState, useEffect} from 'react';
import {ProfileCard} from "./ProfileCard";
import { updateProfile, getUserProfiles } from "../../modules/ProfileDataManager";
import { useHistory } from 'react-router';
import "./ProfileList.css";


export const ProfileList = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [profiles, setProfiles] = useState([]);

    const getProfiles = () => {
        return getUserProfiles(currentUser) 
        .then(currentProfiles => {
            setProfiles(currentProfiles)
        });
    };

    const handleUpdateProfile= (profile) => {
        let updatedProfile= {...profile}
        const editProfileUpdate= {
            id: updatedProfile.id,
            name: updatedProfile.name, 
            dob: updatedProfile.dob, 
            image: updatedProfile.imageUrl,
            userId: currentUser
        }

        updateProfile(editProfileUpdate)
        .then(() => getProfiles())
    }

    const history= useHistory();

    useEffect(() => {
        getProfiles();
    }, []);

return(
    <>
    <section className= "profilesection-content">
        <h2 className="profiles">Profiles</h2>
        <button type= "button" className="addprofile-btn"
        // eslint-disable-next-line no-restricted-globals
        onClick={() => { history.push("/profiles/create")}}> Add Profile</button>
    </section>
    <div className="container-profilecards">
        {profiles.map(profile => 
            <ProfileCard
            key={profile.id}
            profile={profile}
            handleUpdateProfile={handleUpdateProfile} 
           
            /> 
            
            )}
    </div>
    </>
);
};