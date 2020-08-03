import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer">
            <ul className="footer-section">
                <li className="section-title">
                    <NavLink to="therapy">טיפולים</NavLink>
                </li>
                <li><NavLink to="#">אקסס בארס</NavLink></li>
                <li><NavLink to="#">תטא הילינג</NavLink></li>
                <li><NavLink to="#">קלפי טארוט</NavLink></li>
                <li><NavLink to="#">פרחי באך</NavLink></li>
                <li><NavLink to="#">אבני קריסטל</NavLink></li>
            </ul>
            <ul className="footer-section">
                <li className="section-title">
                    <NavLink to="purification">טיהור בית</NavLink>
                </li>
                <li><NavLink to="#">לורם אימפוזום</NavLink></li>
            </ul>
            <ul className="footer-section">
                <li className="section-title">
                    <NavLink to="mezuzot">בתי מזוזה</NavLink>
                </li>
                <li><NavLink to="#">פרטים</NavLink></li>
                <li><NavLink to="#">תמונות</NavLink></li>
            </ul>
            <ul className="footer-section">
                <li className="section-title">
                    <NavLink to="contact">יצירת קשר</NavLink>
                </li>
                <li><a href="https://www.facebook.com/dalia.shacham" target="_blank">
                    <FontAwesomeIcon className="icon" title="פייסבוק" icon={faFacebookSquare} />
                </a><p>פייסבוק</p></li>
                <li><a href="mailto: dool52@walla.com">
                    <FontAwesomeIcon className="icon" title="אימייל" icon={faEnvelope} />
                </a><p>אימייל</p></li>
                <li>
                    <NavLink to="contact">
                        <FontAwesomeIcon className="icon" title="טופס שליחת הודעה" icon={faEnvelopeOpenText} />
                    </NavLink>
                    <p>הודעה</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer;