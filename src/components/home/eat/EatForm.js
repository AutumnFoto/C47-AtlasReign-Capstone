import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {addEat} from "../../../modules/HomeDataManager";
import { EatCard } from './EatCard';
import "./EatForm.css";

export const EatForm = () => {

const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

const [eat, setEat] = useState({
    food: "",
    drink: "",
    snack: "",
    userId: parseInt(currentUser)
});

const [isLoading, setIsLoading] = useState(false)

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
        userId: eat.userId
    }

    addEat(newEatObject)
    .then(() => history.push("/eat"))
}

return(
    <form className="eatform">
        <h2 className= "eatform_title"> Eat</h2>

        <fieldset>
            <div className="form-group">
                <label htmlFor="food"> Food: </label>
                <input type= "text" id="food" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="food.." value={eat.food}/>
                </div>
        </fieldset>

<fieldset>
<div className="form-group">
                <label htmlFor="drink"> Drink: </label>
                <input type= "text" id="drink" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="drink.." value={eat.drink}/>
                </div>
</fieldset>

<fieldset>
<div className="form-group">
                <label htmlFor="snack"> Snack: </label>
                <input type= "text" id="snack" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="snack.." value={eat.snack}/>
                </div>
</fieldset>


<button type= "button" className="btn btn-primary" onClick={handleClickSaveEat}>Save Eat</button>
    </form>


)

}