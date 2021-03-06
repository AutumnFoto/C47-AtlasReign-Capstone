import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {updateDiaper, getDiaperbyId} from "../../../modules/HomeDataManager";

export const DiaperEditForm= () => {

    const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"));

    const timeStamp= Date.now();

    const [diaper, setDiaper] = useState({
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
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
            timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timeStamp) ,
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
        <label htmlFor="diaper">Diaper:</label>
        <input type= "text" required className="form-control" onChange={handleFieldChange} id="diaper" value={diaper.diaper} /></div>

        <Link to = {`/`}>
            <button className= "return">Go Back</button>
            </Link>

            <div className="submit">
                <button type="button" disabled={isLoading} onClick={updateExisitingDiaper} className="submit">Submit</button>
            </div>
        </fieldset>
    </form>
    </>
);

};