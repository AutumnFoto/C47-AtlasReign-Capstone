import React from "react";
import {useHistory} from "react-router-dom";
import "./buttons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils, faRunning, faBed, faBaby} from "@fortawesome/free-solid-svg-icons";


export const HomeButtons = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const history= useHistory();

return (
    <>
<button type="button" className= "addactivity-btn" onClick={() =>{history.push("activity/create")}}> ACTIVITY
<FontAwesomeIcon icon={faRunning} size="2x" className="run"/>

</button>

<button type="button" className="addeat-btn" onClick={() => 
            {history.push("eat/create")}}> EAT
<FontAwesomeIcon icon={faUtensils} size="2x" className="eat"/>
            
            </button>

<button type="button" className="addsleep-btn" onClick={() => 
            {history.push("sleep/create")}}> SLEEP

<FontAwesomeIcon icon={faBed} size="2x" className="bed"/>
            
            </button>


<button type="button" className="adddiaper-btn" onClick={() => 
            {history.push("diaper/create")}}> DIAPER
            <FontAwesomeIcon icon={faBaby} size="2x" className="baby"/>
            
            </button>
</>
)
}