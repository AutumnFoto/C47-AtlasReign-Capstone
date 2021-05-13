import React, {useState, useEffect} from "react";
import {EatCard} from "./EatCard";
import {updateEat, getAllEat, deleteEat } from "../../../modules/HomeDataManager";
// import {useHistory} from "react-router-dom";
import "./EatList.css";

export const EatList = () => {
    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [eat, setEat] = useState([]);

    const getEat= () => {
        return getAllEat()
        .then(eatFromAPI => {
            setEat(eatFromAPI)
        });
    };
    // const history= useHistory();
    
    const handleDeleteEat= id => {
        deleteEat(id)
        .then(() => getAllEat()).then(setEat)
    }
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


    useEffect(() => {
        getEat();
    }, []);


return(
    <>

    <div className="container-eatcards">
        {eat.map(eat =>
        <EatCard
        key={eat.id}
        eat={eat}
        handleUpdateEat={handleUpdateEat}
        handleDeleteEat= {handleDeleteEat}
        />
            )}
    </div>
    </>
);
};

