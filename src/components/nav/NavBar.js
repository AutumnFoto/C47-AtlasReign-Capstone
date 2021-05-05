import React from "react";
import {Link, useHistory} from "react-router-dom";
import "../nav/NavBar.css";
import logo from "../../images/logo.png" ;

export const NavBar =() => {

    const history= useHistory();

    const handleLogout = () => {
        sessionStorage.clear();
        history.push("/login")
    }

return(
        <nav className= "nav-container">
<div>
    <img className="logo" src={logo} alt="logo"/>
</div>
            <ul className= "navbar">
                <li className= "nav-item">
                    <Link className= "nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className= "nav-link" to= "/profiles">Profiles</Link>
                </li>

                <li className= "nav-item">
                    <Link className= "nav-link" to ="/milestones">Milstones</Link>
                </li>

                <li className="nav-item">
          <Link className="nav-link" onClick={handleLogout} to="/login"> Logout </Link>
        </li>
                </ul>
               </nav>
    )
}

