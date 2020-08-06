import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Context from './Context';

const Footer = () => {
    const { handleClick, setNavClass } = useContext(Context);

    return (
        <div className="footer-desk">
            <ul className="footer-section-desk">
                <li className="section-title-desk">
                    <Link to="therapy" onClick={() => setNavClass("/therapy")}>טיפולים</Link>
                </li>
                <li><Link to="therapy" onClick={() => handleClick("AccessBars")}>אקסס בארס</Link></li>
                <li><Link to="therapy" onClick={() => handleClick("ThetaHealing")}>תטא הילינג</Link></li>
                <li><Link to="therapy" onClick={() => handleClick("TarotCards")}>קלפי טארוט</Link></li>
                <li><Link to="therapy" onClick={() => handleClick("BachFlowers")}>פרחי באך</Link></li>
                <li><Link to="therapy" onClick={() => handleClick("Crystals")}>אבני קריסטל</Link></li>
            </ul>
            <ul className="footer-section-desk">
                <li className="section-title-desk">
                    <Link to="tihur" onClick={() => setNavClass("/tihur")}>טיהור בית</Link>
                </li>
                <li><Link to="contact" onClick={() => setNavClass("/contact")}>הזמנת טיהור</Link></li>
            </ul>
            <ul className="footer-section-desk">
                <li className="section-title-desk">
                    <Link to="mezuzot" onClick={() => setNavClass("/mezuzot")}>בתי מזוזה</Link>
                </li>
                <li><Link to="contact" onClick={() => setNavClass("/contact")}>הזמנות</Link></li>
            </ul>
            <ul className="footer-section-desk">
                <li className="section-contact-desk">
                    <Link to="contact" onClick={() => setNavClass("/contact")}>יצירת קשר</Link>
                </li>
                <li><a href="https://www.facebook.com/dalia.shacham" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon-desk" title="פייסבוק" icon={faFacebookSquare} />
                </a><p>פייסבוק</p></li>
                <li><a href="mailto: dool52@walla.com">
                    <FontAwesomeIcon className="icon-desk" title="אימייל" icon={faEnvelope} />
                </a><p>אימייל</p></li>
                <li>
                    <Link to="contact" onClick={() => setNavClass("/contact")}>
                        <FontAwesomeIcon className="icon-desk" title="טופס שליחת הודעה" icon={faEnvelopeOpenText} />
                    </Link>
                    <p>הודעה</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer;