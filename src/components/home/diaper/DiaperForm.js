import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {addDiaper} from "../../../modules/HomeDataManager";
import "./DiaperForm.css";

export const DiaperForm = () => {
    const currentUser=JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [diaper, setDiaper] = useState({
        time: "",
        diaper: "",
        userId: parseInt(currentUser)
    });

    const history= useHistory();

    const handleControlledInputChange = (event) => {

    const newDiaper= {...diaper}
    let selectedVal = event.target.value
    if(event.target.id.includes("Id")) {
        selectedVal= parseInt(selectedVal)
    }


    newDiaper[event.target.id] = selectedVal
    setDiaper(newDiaper)

    }


useEffect(() => {

}, []);

const handleClickSaveDiaper = (event) => {
    event.preventDefault()

    const newDiaperObj= {
        time: diaper.time, 
        diaper: diaper.diaper,
        userId: diaper.userId
    }

    addDiaper(newDiaperObj)
    .then(() => history.push("/diaper"))
}

return (

    <form className="diaperform">
        <h2 className= "diaperform_title"> Diaper</h2>

        <fieldset>
            <div className= "form-group">
                <label htmlFor="time">Time: </label>
                <input type="text" id="time" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder= "time.." value={diaper.time} />
            </div>
        </fieldset>

        <fieldset>
            <div className= "form-group">
                <label htmlFor="diaper">Diaper: </label>
                <input type="text" id="diaper" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder= "wet..dry..mixed.." value={diaper.diaper} />
            </div>
        </fieldset>

        <button type= "button" className="btn btn-primary" onClick={handleClickSaveDiaper}>Save Diaper</button>
 </form>
)
}