import React, {useState, useEffect} from "react";
import {updateProfile, getProfileById} from "../../modules/ProfileDataManager";
import {useParams, useHistory, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUndo} from "@fortawesome/free-solid-svg-icons";
import "./ProfileEditForm.css"

export const ProfileEditForm = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [profile, setProfile] = useState({
        name:"",
        dob:"",
        image: "",
        userId: parseInt(currentUser)
    })

    const [isLoading, setIsLoading] = useState(false);

    const {profileId} = useParams();
    const history= useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = {...profile};
        stateToChange[event.target.id] = event.target.value;

        setProfile(stateToChange);
    };

    const updateExisitingProfile = (event) => {
        event.preventDefault() 
        setIsLoading(true);

        const editedProfile = {
            id: profileId, 
            name: profile.name,
            dob: profile.dob,
             image: profile.image,
             userId: profile.userId
            
            };

            updateProfile(editedProfile)
            .then(() => history.push("/profiles")

            )

    }

useEffect(() => {
    getProfileById(profileId)
    .then(profile => {
        setProfile(profile);
        setIsLoading(false)
    })
}, [])

return (
    <>
    <form>
        <fieldset className="profile_form">
            <div>
            <div className="editform">
            <label htmlFor="name">Name:</label>
            <input type="text" required className="form-control" onChange={handleFieldChange} id="name" value={profile.name} />
            </div>

<div>
            <label htmlFor="dob">DOB:</label>
            <input type="text" required className="form-control" onChange={handleFieldChange} id="dob" value={profile.dob} />
</div>
<div>
            <label htmlFor= "image"> Image:</label>
            <input type= "text" required className="form-control" onChange={handleFieldChange} id="image" value={profile.image} />
            </div>
            </div>

            <Link to = {`/profiles`}>
            <button className= "btn-primary">GO BACK
            <FontAwesomeIcon icon={faUndo} size="1x" className="undo"/>
            </button>
            </Link>

            <div className="submit">
                <button type="button" disabled={isLoading} onClick={updateExisitingProfile} className="btn-primary">Submit</button>
            </div>
        </fieldset>
    </form>
    </>
);

};