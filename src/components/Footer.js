import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer-desk">
            <ul className="footer-section-desk">
                <li className="section-title-desk">
                    <Link to="therapy">טיפולים</Link>
                </li>
                <li><Link to="#">אקסס בארס</Link></li>
                <li><Link to="#">תטא הילינג</Link></li>
                <li><Link to="#">קלפי טארוט</Link></li>
                <li><Link to="#">פרחי באך</Link></li>
                <li><Link to="#">אבני קריסטל</Link></li>
            </ul>
            <ul className="footer-section-desk">
                <li className="section-title-desk">
                    <Link to="purification">טיהור בית</Link>
                </li>
                <li><Link to="#">מידע</Link></li>
            </ul>
            <ul className="footer-section-desk">
                <li className="section-title-desk">
                    <Link to="mezuzot">בתי מזוזה</Link>
                </li>
                <li><Link to="#">פרטים</Link></li>
                <li><Link to="#">תמונות</Link></li>
            </ul>
            <ul className="footer-section-desk">
                <li className="section-contact-desk">
                    <Link to="contact">יצירת קשר</Link>
                </li>
                <li><a href="https://www.facebook.com/dalia.shacham" target="_blank">
                    <FontAwesomeIcon className="icon-desk" title="פייסבוק" icon={faFacebookSquare} />
                </a><p>פייסבוק</p></li>
                <li><a href="mailto: dool52@walla.com">
                    <FontAwesomeIcon className="icon-desk" title="אימייל" icon={faEnvelope} />
                </a><p>אימייל</p></li>
                <li>
                    <Link to="contact">
                        <FontAwesomeIcon className="icon-desk" title="טופס שליחת הודעה" icon={faEnvelopeOpenText} />
                    </Link>
                    <p>הודעה</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer;