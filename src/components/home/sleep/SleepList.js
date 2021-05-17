import React, {useState, useEffect} from "react";
import {SleepCard} from "./SleepCard";
import {updateSleep, getAllSleep, deleteSleep} from "../../../modules/HomeDataManager";
// import {useHistory} from "react-router-dom";
import "./SleepList.css";

export const SleepList = () => {
    const currentUser=JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [sleep, setSleep] = useState([]);

    const getSleep = () => {
        return getAllSleep(currentUser)
        .then(sleepFromAPI => {
            setSleep(sleepFromAPI)
        });
    };

    // const history= useHistory();

    const handleDeleteSleep = id => {
        deleteSleep(id)
        .then(() => getAllSleep(currentUser)).then(setSleep)
    }

    const handleUpdateSleep = (sleep) => {
        let updatedSleep = {...sleep}

        const editedSleepUpdate={
            id: updatedSleep.id,
            hours: updatedSleep.hours,
            userId: currentUser
        }

        updateSleep(editedSleepUpdate)
        .then(() => getSleep())
    }

    useEffect(() => {
        getSleep();
    }, []);

    return(

        <>
        <div className="container-sleepcards">
            {sleep.map(sleep =>
               <SleepCard
               
               key={sleep.id}
               sleep={sleep}
               userId={currentUser}
               handleUpdateSleep={handleUpdateSleep}
               handleDeleteSleep={handleDeleteSleep}
                />
                
                )}
        </div>
        </>
    );
};

