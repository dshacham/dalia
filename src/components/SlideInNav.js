import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import '../style/SlideInNav.scss';
import Context from './Context';

const SlideInNav = () => {
    const { setTherapy } = useContext(Context);

    const [isMenuOpen, setIsMenuOpen] = useState(false); // hamburger
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [isMenuClosed, setIsMenuClosed] = useState(true);
    const [initClosed, setInitClosed] = useState(true);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMenuClicked(!isMenuClicked);
        setIsMenuClosed(!isMenuClosed);
        setInitClosed(false);
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
                <Link to="/"><img src="../../assets/images/logo.png" alt="logo" className="logo" /></Link>
            </div>
            <nav className="slide-in">
                {initClosed ? null
                    :
                    isMenuClicked ?
                        <ul className={isMenuOpen ? "ul-slide slide-in-anim" : null}>
                            <li id="home">
                                <NavLink onClick={() => {handleMenuClick(); setTherapy("")}} to="/">ראשי</NavLink>
                            </li>
                            <li id="therapy">
                                <NavLink onClick={() => {handleMenuClick(); setTherapy("")}} to="therapy">טיפולים</NavLink>
                            </li>
                            <li id="tihur">
                                <NavLink onClick={() => {handleMenuClick(); setTherapy("")}} to="tihur">טיהור בית</NavLink>
                            </li>
                            <li id="mezuzot">
                                <NavLink onClick={() => {handleMenuClick(); setTherapy("")}} to="mezuzot">בתי מזוזה</NavLink>
                            </li>
                            <li id="contact">
                                <NavLink onClick={() => {handleMenuClick(); setTherapy("")}} to="contact">יצירת קשר</NavLink>
                            </li>
                        </ul>
                        :
                        <ul className={isMenuClosed ? "ul-slide slide-out-anim" : null}>
                            <li id="home">
                                <NavLink to="/">ראשי</NavLink>
                            </li>
                            <li id="therapy">
                                <NavLink to="therapy">טיפולים</NavLink>
                            </li>
                            <li id="tihur">
                                <NavLink to="tihur">טיהור בית</NavLink>
                            </li>
                            <li id="mezuzot">
                                <NavLink to="mezuzot">בתי מזוזה</NavLink>
                            </li>
                            <li id="contact">
                                <NavLink to="contact">יצירת קשר</NavLink>
                            </li>
                        </ul>
                }
            </nav>
        </div>
    )
}

export default SlideInNav;