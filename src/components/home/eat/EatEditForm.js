import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {updateEat , getEatById} from "../../../modules/HomeDataManager";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUndo} from "@fortawesome/free-solid-svg-icons";
import "./EatEditForm.css";

export const EatEditForm = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"));

    const timeStamp= Date.now();

    const [eat, setEat] = useState({
        food: "",
        drink: "",
        snack: "",
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
        userId: parseInt(currentUser)
    })

    const [isLoading, setIsLoading] = useState(false);

    const {eatId} = useParams();
    const history= useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = {...eat};
        stateToChange[event.target.id] = event.target.value;

        setEat(stateToChange);
    };

    const updateExisitingEat = (event) => {
        event.preventDefault() 
        setIsLoading(true);

        const editedEat = {
            id: eatId,
            food: eat.food, 
            drink: eat.drink, 
            snack: eat.snack,
            timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
            userId: eat.userId
            
            };

            updateEat(editedEat)
            .then(() => history.push("/")

            )

    }

useEffect(() => {
    getEatById(eatId)
    .then(eat => {
        setEat(eat);
        setIsLoading(false)
    })
}, [])

return (
    <>
    <form>
        <fieldset className="eat_form">
            <div className="editform">
                <div>
            <label htmlFor="name">Food:</label>
            <input type="text" required className="form-control" onChange={handleFieldChange} id="food" value={eat.food} />
            </div>

         <div>
            <label htmlFor="drink">Drink:</label>
            <input type="text" required className="form-control" onChange={handleFieldChange} id="drink" value={eat.drink} />
            </div>

          <div>
            <label htmlFor= "snack">Snack:</label>
            <input type= "text" required className="form-control" onChange={handleFieldChange} id="snack" value={eat.snack} />
            </div>

        
            <Link to = {`/`}>
            <button className= "return"> GO BACK 
            <FontAwesomeIcon icon={faUndo} size="1x" className="undo"/>
            </button>
            </Link>
            

            <div className="submit">
                <button type="button" disabled={isLoading} onClick={updateExisitingEat} className="submit"> SUBMIT </button>
            </div>
            </div>
        </fieldset>
    </form>
    </>
);

};