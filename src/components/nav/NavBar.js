import React from "react";
import {Link, useHistory} from "react-router-dom";
import "../nav/NavBar.css";
// import images

export const NavBar =( props) => {

    const history= useHistory();

    const handleLogout = () => {
        sessionStorage.clear();
        history.push("/login")
    }

return(
        <nav className= "nav-container">

            <ul className= "navbar">
                <li className= "nav-item">
                    <Link className= "nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className= "nav-link" to= "/profiles">Profiles</Link>
                </li>

                <li className= "nav-item">
                    <Link className= "nav-link" to ="/milestones">Milstones</Link>

                    <li className="nav-item">
                        <button type= "button" className="btn btn-primary" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </li>
                </ul>
               </nav>
    )
}