import React, {useState, useEffect} from "react";
import {EatCard} from "./EatCard";
import {updateEat, getUserEat } from "../../../modules/HomeDataManager";
import {useHistory} from "react-router-dom";
import "./EatList.css";

export const EatList = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [eat, setEat] = useState([]);

    const getEat= () => {
        return  getUserEat(currentUser)
        .then(currentEat => {
            setEat(currentEat)
        });
    };

    const handleUpdateEat= (eat) => {
        let updatedEat= {...eat}
        const editEatUpdate= {
            id: updatedEat.id,
            food: updatedEat.food,
            drink: updatedEat.drink,
            snack: updatedEat.snack,
            userId: currentUser
        }

        updateEat(editEatUpdate)
        .then(() => getEat())
    }

    const history= useHistory();

    useEffect(() => {
        getEat();
    }, []);


return(
    <>
    <section className= "eatsection-content">
        <button type="button" className="addeat-btn" onClick={() => 
            
            {history.push("/eat/create")}}> Eat</button>
    </section>
    <div className="conatiner-eatcards">
        {eat.map(eat =>
        <EatCard
        key={eat.id}
        eat={eat}
        handleUpdateEat={handleUpdateEat}
        />
            )}
    </div>
    </>
);
}

