import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss';

const NavBar = () => {

    return (
        <nav className="nav">
            <NavLink to="/"><img src="../../assets/images/logo.png" alt="logo" /></NavLink>
            <div className="navbar">
                <ul className="nav-items">
                    <li id="home">
                        <NavLink to="/">ראשי</NavLink>
                    </li>
                    <li id="therapy">
                        <NavLink to="therapy">טיפולים</NavLink>
                    </li>
                    <li id="purification">
                        <NavLink to="purification">טיהור בית</NavLink>
                    </li>
                    <li id="mezuzot">
                        <NavLink to="mezuzot">בתי מזוזה</NavLink>
                    </li>
                    <li id="contact">
                        <NavLink to="contact">יצירת קשר</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;