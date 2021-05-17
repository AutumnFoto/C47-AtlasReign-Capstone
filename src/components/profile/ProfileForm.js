import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {addProfile} from "../../modules/ProfileDataManager";
import "./ProfileForm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSave} from "@fortawesome/free-solid-svg-icons";

export const ProfileForm = () => {

    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [profile, setProfile] = useState({
        name:"",
        dob:"",
        image: "",
        userId: parseInt(currentUser)
    });

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
            image: profile.image,
            userId: profile.userId
        }
        addProfile(newProfileObject)
        .then(() => history.push("/profiles"))

   }

    return(
        <form className ="profileForm">
            <h2 className ="profileform_title">New Profile Form</h2>
            <fieldset className="profile_form">
                <div className="form-group">
                    <label  htmlFor="name"> Child's Name:</label>
                    <input type="text" id='name' onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder= "Child's name" 
                    value= {profile.name} />
                </div>
          

            
                <div className= "form-group">
                    <label htmlFor= "dob">DOB:</label>
                    <input type = "text" id="dob" onChange={handleControlledInputChange} required autoFocus
                    className="form-control"
                    placeholder="childs dob"
                    value={profile.dob} />
                </div>
            

          
                <div className="form-group">
                    <label htmlFor= "image">Image:</label>
                    <input text="text" id="image"
                    onChange={handleControlledInputChange}
                    required autoFocus
                    className="form-control"
                    placeholder="image"
                    value= {profile.image} />
                </div>
            </fieldset>
            <button type= "button" className="save-btn" onClick={handleClickSaveProfile}>SAVE  <FontAwesomeIcon icon={faSave} size="1x" className="save"/></button>
        </form>
    )

    }