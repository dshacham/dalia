import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import '../style/SlideInNav.scss';

const SlideInNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMenuClicked(true);
    };

    return (
        <div className="slide-in-nav">
            <div className="top-nav">
                <HamburgerMenu
                    className="hamburger"
                    isOpen={isMenuOpen}
                    menuClicked={handleMenuClick}
                    color='#00158b'
                    strokeWidth={3}
                />
                <NavLink to="/"><img src="../../assets/images/logo.png" alt="logo" className="logo" /></NavLink>
            </div>
            <nav className="slide-in">
                {
                    isMenuClicked ?
                        <ul className={isMenuOpen === false ? "ul-slide slide-out-anim" : "ul-slide slide-in-anim"}>
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
                        :
                        null
                }
            </nav>
        </div>
    )
}

export default SlideInNav;