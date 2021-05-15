import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {addDiaper} from "../../../modules/HomeDataManager";
import "./DiaperForm.css";

export const DiaperForm = () => {
    const currentUser=JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const timeStamp= Date.now();

    const [diaper, setDiaper] = useState({
         timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp),
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
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
        diaper: diaper.diaper,
        userId: diaper.userId
    }

    addDiaper(newDiaperObj)
    .then(() => history.push("/"))
}

return (

    <form className="diaperform">
        <h2 className= "diaperform_title"> Diaper</h2>

        <fieldset>
            <div className= "form-group">
                <label htmlFor="diaper">Diaper: </label>
                <input type="text" id="diaper" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder= "wet..dry..mixed.." value={diaper.diaper} />
            </div>
        </fieldset>

        <button type= "button" className="save-btn" onClick={handleClickSaveDiaper}>Save Diaper</button>
 </form>
)
}