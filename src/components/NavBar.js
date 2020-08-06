import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss';
import Context from './Context';

const NavBar = () => {
    const { navClass, setNavClass, setTherapy } = useContext(Context);

    return (
        <nav className="nav">
            <NavLink to="/"><img src="../../assets/images/logo7.png" alt="logo" /></NavLink>
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
        // <nav className="nav">
        //     <NavLink to="/"><img src="../../assets/images/logo7.png" alt="logo" /></NavLink>
        //     <div className="navbar">
        //         <ul className="nav-items">
        //             <li id="home">
        //                 <NavLink to="/" onClick={() => setNavClass("/")} className={navClass === "/" ? "selected" : ""}>ראשי</NavLink>
        //             </li>
        //             <li id="therapy" className={navClass === "/therapy" ? "selected" : ""}>
        //                 <NavLink to="therapy" onClick={() => setNavClass("/therapy")}>טיפולים</NavLink>
        //             </li>
        //             <li id="tihur" className={navClass === "/tihur" ? "selected" : ""}>
        //                 <NavLink to="tihur" onClick={() => setNavClass("/tihur")}>טיהור בית</NavLink>
        //             </li>
        //             <li id="mezuzot" className={navClass === "/mezuzot" ? "selected" : ""}>
        //                 <NavLink to="mezuzot" onClick={() => setNavClass("/mezuzot")}>בתי מזוזה</NavLink>
        //             </li>
        //             <li id="contact" className={navClass === "/contact" ? "selected" : ""}>
        //                 <NavLink to="contact" onClick={() => setNavClass("/contact")}>יצירת קשר</NavLink>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );
}

export default NavBar;