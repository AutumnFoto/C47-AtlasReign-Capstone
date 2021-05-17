import React, {useState, useEffect} from "react";
import {DiaperCard} from "./DiaperCard";
import {updateDiaper, getAllDiaper, deleteDiaper} from "../../../modules/HomeDataManager";

export const DiaperList = () => {

const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

const [diaper, setDiaper] = useState([]);

const getDiaper= () => {
    return getAllDiaper(currentUser)
    .then(diaperFromAPI => {
        setDiaper(diaperFromAPI)
    });
};

const handleDeleteDiaper = id => {
    deleteDiaper(id)
    .then(() => getAllDiaper(currentUser)).then(setDiaper)
}

const handleUpdateDiaper=(diaper) => {
    let updatedDiaper = {...diaper}

    const editedDiaperUpdate = {

        id: updatedDiaper.id, 
        time: updatedDiaper.time, 
        diaper:updatedDiaper.diaper,
        userId: currentUser
    }

    updateDiaper(editedDiaperUpdate)
    .then(() => getDiaper());
}

useEffect(() => {
    getDiaper();
}, []);

return (
    <>
    <div className="container-diapercards">
        {diaper.map(diaper =>
            <DiaperCard
            
            key={diaper.id}
            diaper={diaper}
            userId={currentUser}
            handleUpdateDiaper = {handleUpdateDiaper}
            handleDeleteDiaper= {handleDeleteDiaper}
            />   
            )}
    </div>
    </>
);
 
};