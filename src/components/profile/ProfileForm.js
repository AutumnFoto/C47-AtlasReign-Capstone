import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router';
import {addProfile, getAllProfiles} from "../../modules/ProfileDataManager";

export const ProfileFrom = () => {
    const [profile, setProfile] = useState({
        name:"",
        dob:"",
        image: ""
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

    const handleClickSaveProfile = (event) => {
        event.preventDefault()

        const saveInputValue= profile.name;
        getAllProfiles()
        .then(users=> {
            const userObj= user.find(user => user.name.toLowerCase() === saveInputValue.toLowerCase());
            if(userObj === undefined) {
                window.alert("please select an existing user")
                return history.push('/profiles')
            }

            const newProfilePage = {
                userId: userObj.id,
                currentUserId: parseInt(sessionsStorage.getItem("atlasreign_user"))

            }

            getAllProfiles()
            .then(profiles => {
                const currentProfile = profiles.find(profile => profile.userId === newProfilePage.userId);

                if(currentPage)
                (stopped)
            })
        })
    }


}