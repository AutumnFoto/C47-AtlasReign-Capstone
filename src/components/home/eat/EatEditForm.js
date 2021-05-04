import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {updateEat , getEatById} from "../../../modules/HomeDataManager";

export const EatEditForm = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [eat, setEat] = useState({
        food: "",
        drink: "",
        snack: "",
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
            food: eat.food, 
            drink: eat.drink, 
            snack: eat.snack,
            userId: eat.userId
            
            };

            updateEat(editedEat)
            .then(() => history.push("/eat")

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
        <fieldset>
            <div className="editform">
            <label htmlFor="name">Food:</label>
            <input type="text" required className="form-control" onChange={handleFieldChange} id="food" value={eat.food} />

            <label htmlFor="drink">Drink:</label>
            <input type="text" required className="form-control" onChange={handleFieldChange} id="drink" value={eat.drink} />

            <label htmlFor= "snack"> Snack:</label>
            <input type= "text" required className="form-control" onChange={handleFieldChange} id="snack" value={eat.snack} />
            </div>

            <Link to = {`/profiles`}>
            <button className= "btn-primary">Go Back</button>
            </Link>

            <div className="submit">
                <button type="button" disabled={isLoading} onClick={updateExisitingEat} className="btn-primary">Submit</button>
            </div>
        </fieldset>
    </form>
    </>
);

};