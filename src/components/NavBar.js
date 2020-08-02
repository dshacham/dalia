import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from './Context';
import '../style/NavBar.scss';

const NavBar = () => {
    const { navClass, setNavClass } = useContext(Context);

    return (
        <nav className="nav">
            <img src="../../assets/images/logo.png" alt="logo" />
            <div className="navbar">
                <ul className="nav-items">
                    <li id="home"
                        className={navClass === "/home" ? "selected" : ""}>
                        <NavLink to="/" onClick={() => setNavClass("/home")}>ראשי</NavLink>
                    </li>
                    <li id="therapy"
                        className={navClass === "/therapy" ? "selected" : ""}>
                        <NavLink to="therapy" onClick={() => setNavClass("/therapy")}>טיפולים</NavLink>
                    </li>
                    <li id="purification"
                        className={navClass === "/purification" ? "selected" : ""}>
                        <NavLink to="purification" onClick={() => setNavClass("/purification")}>טיהור בית</NavLink>
                    </li>
                    <li id="mezuzot"
                        className={navClass === "/mezuzot" ? "selected" : ""}>
                        <NavLink to="mezuzot" onClick={() => setNavClass("/mezuzot")}>בתי מזוזה</NavLink>
                    </li>
                    <li id="contact"
                        className={navClass === "/contact" ? "selected" : ""}>
                        <NavLink to="contact" onClick={() => setNavClass("/contact")}>יצירת קשר</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;