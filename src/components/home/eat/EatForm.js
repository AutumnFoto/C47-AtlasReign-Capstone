import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {addEat} from "../../../modules/HomeDataManager";
import "./EatForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSave} from "@fortawesome/free-solid-svg-icons";


export const EatForm = () => {

const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"));

const timeStamp= Date.now();

const [eat, setEat] = useState({
    food:"",
    drink:"",
    snack:"",
    timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp),
    userId: parseInt(currentUser)
});

const history= useHistory();

const handleControlledInputChange= (event) => {
    const newEat= {...eat}
    let selectedVal= event.target.value
    if(event.target.id.includes("Id")) {
        selectedVal=parseInt(selectedVal)
    }

    newEat[event.target.id] = selectedVal
    setEat(newEat)
}

useEffect(() => {

}, []);

const handleClickSaveEat = (event) => {
    event.preventDefault()

    const newEatObject= {
        food: eat.food, 
        drink: eat.drink, 
        snack: eat.snack,
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
        userId: eat.userId
    }

    addEat(newEatObject)
    .then(() => history.push("/"))
}

return(
    <form className="eatform">
        <h2 className= "eatform_title"> Eat Form</h2>

        <fieldset className= "eat_form">
            <div className="form-group">
                <label htmlFor="food"> Food: </label>
                <input type= "text" id="food" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="food.." value={eat.food}/>
                </div>
       


<div className="form-group">
                <label htmlFor="drink"> Drink: </label>
                <input type= "text" id="drink" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="drink.." value={eat.drink}/>
                </div>



<div className="form-group">
                <label htmlFor="snack"> Snack: </label>
                <input type= "text" id="snack" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="snack.." value={eat.snack}/>
                </div>
</fieldset>


<button type= "button" className="save-btn" onClick={handleClickSaveEat}>SAVE <FontAwesomeIcon icon={faSave} size="1x" className="save"/></button>
    </form>


)

}