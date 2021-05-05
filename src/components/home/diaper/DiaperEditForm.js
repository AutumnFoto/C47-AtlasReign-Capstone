import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {updateDiaper, getDiaperbyId} from "../../../modules/HomeDataManager";

export const DiaperEditForm= () => {

    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

    const [diaper, setDiaper] = useState({
        time: "",
         diaper:"",
         userId: parseInt(currentUser)
    })

    const [isLoading, setIsLoading] = useState(false)

    const {diaperId} = useParams();
    const history= useHistory();

    const handleFieldChange= (event) => {
        const stateToChange= {...diaper};
        stateToChange[event.target.id] = event.target.value;

        setDiaper(stateToChange);
    };

    const updateExisitingDiaper = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedDiaper= {
            id: diaperId, 
            time: diaper.time,
            diaper: diaper.diaper,
            userId: diaper.userId
        };

        updateDiaper(editedDiaper)
        .then(() => history.push("/"))

    }

    useEffect(() => {
        getDiaperbyId(diaperId)
        .then(diaper => {
            setDiaper(diaper);
            setIsLoading(false)
        })
    }, [])

    return (
    <>
           <form>
<fieldset>
    <div className="editform">
        <label htmlFor="time">Time:</label>
        <input type= "text" required className="form-control" onChange={handleFieldChange} id="time" value={diaper.time} />
    </div>

    <div className="editform">
        <label htmlFor="diaper">Diaper:</label>
        <input type= "text" required className="form-control" onChange={handleFieldChange} id="diaper" value={diaper.diaper} /></div>

        <Link to = {`/`}>
            <button className= "btn-primary">Go Back</button>
            </Link>

            <div className="submit">
                <button type="button" disabled={isLoading} onClick={updateExisitingDiaper} className="btn-primary">Submit</button>
            </div>
        </fieldset>
    </form>
    </>
);

};