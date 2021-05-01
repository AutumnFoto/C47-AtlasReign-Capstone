import React, {useState, useEffect} from 'react';
import {ProfileCard} from "./ProfileCard";
import {useHistory} from "react-router-dom";
import {getAllProfiles} from "../../modules/ProfileDataManager";


export const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);

    const history= useHistory();

    const getProfiles = () => {
        return getAllProfiles() 
        .then(profilesFromAPI => {
            setProfiles(profilesFromAPI)
        });
    };

    useEffect(() => {
        getProfiles();
    }, []);

return(
    <>
    <section className= "profilesection-content">
        <button type= "button" className="btn"
        onClick={()=> {history.push("/profiles/create")}}> Add Profile</button>
    </section>
    <div className="container-profilecards">
        {profiles.map(profile => 
            <ProfileCard
            key={profile.id}
            profile={profile}
           
            /> 
            
            )}
    </div>
    </>
);
};