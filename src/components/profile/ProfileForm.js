import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {addProfile, getAllProfiles} from "../../modules/ProfileDataManager";
// import {getAllUsers} from "../../modules/UserDataManager";
import "./ProfileForm.css"

export const ProfileForm = () => {

    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [profile, setProfile] = useState({
        name:"",
        dob:"",
        image: "",
        userId: parseInt(currentUser)
    });

    const [isLoading, setIsLoading] = useState(false);

    const history= useHistory();

    const handleControlledInputChange = (event) => {
        const newProfile = {...profile}
        let selectedVal = event.target.value
        if(event.target.id.includes("Id")) {
            selectedVal= parseInt(selectedVal)
        }

        newProfile[event.target.id] = selectedVal
        setProfile(newProfile)
    }

    useEffect(() => {

    }, []);

    const handleClickSaveProfile = (event) => {
        event.preventDefault()

        const newProfileObject = {
            name: profile.name,
            dob:profile.dob,
            image: profile.imageUrl,
            userId: profile.userId
        }
        addProfile(newProfileObject)
        .then(() => history.push("/profiles"))

   }

    return(
        <form className ="profileForm">
            <h2 className ="profileForm__title">New Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label  htmlFor="name"> Child's Name:</label>
                    <input type="text" id='name' onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder= "Child's name" 
                    value= {profile.name} />
                </div>
            </fieldset>

            <fieldset>
                <div className= "form-group">
                    <label htmlFor= "dob">DOB:</label>
                    <input type = "text" id="dob" onChange={handleControlledInputChange} required autoFocus
                    className="form-control"
                    placeholder="childs dob"
                    value={profile.dob} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor= "image">Image:</label>
                    <input text="text" id="image"
                    onChange={handleControlledInputChange}
                    required autoFocus
                    className="form-control"
                    placeholder="image"
                    value= {profile.imageUrl} />
                </div>
            </fieldset>
            <button type= "button" className="btn btn-primary" onClick={handleClickSaveProfile}>Save Profile</button>
        </form>
    )

    }