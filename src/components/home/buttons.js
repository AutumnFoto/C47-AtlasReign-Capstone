import React from "react";
import {useHistory} from "react-router-dom";
import "./buttons.css";


export const HomeButtons = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const history= useHistory();

return (
    <>
<button type="button" className= "addactivity-btn" onClick={() =>{history.push("activity/create")}}> Activity
</button>

<button type="button" className="addeat-btn" onClick={() => 
            {history.push("eat/create")}}> Eat</button>

<button type="button" className="addsleep-btn" onClick={() => 
            {history.push("sleep/create")}}> Sleep</button>
</>
)
}