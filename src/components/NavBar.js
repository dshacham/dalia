import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss';
import Context from './Context';

const NavBar = () => {
    const { navClass, setNavClass, setTherapy } = useContext(Context);

    return (
        <nav className="nav">
            <NavLink to="/"><img src="../../assets/images/logo.png" alt="logo" /></NavLink>
            <div className="navbar">
                <div className="nav-items">
                    <NavLink to="/" id="home"
                        onClick={() => { setNavClass("/"); setTherapy("") }}
                        className={navClass === "/" ? "selected" : ""}>
                        ראשי
                        </NavLink>
                    <NavLink to="therapy" id="therapy"
                        onClick={() => { setNavClass("/therapy"); setTherapy("") }}
                        className={navClass === "/therapy" ? "selected" : ""}>
                        טיפולים
                        </NavLink>
                    <NavLink to="tihur" id="tihur"
                        onClick={() => { setNavClass("/tihur"); setTherapy("") }}
                        className={navClass === "/tihur" ? "selected" : ""}>
                        טיהור בית
                        </NavLink>
                    <NavLink to="mezuzot" id="mezuzot"
                        onClick={() => { setNavClass("/mezuzot"); setTherapy("") }}
                        className={navClass === "/mezuzot" ? "selected" : ""}>
                        בתי מזוזה
                        </NavLink>
                    <NavLink to="contact" id="contact"
                        onClick={() => { setNavClass("/contact"); setTherapy("") }}
                        className={navClass === "/contact" ? "selected" : ""}>
                        יצירת קשר
                        </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;