import React from 'react';
import { Link } from 'react-router-dom';
import '../style/FooterMobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpenText, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterMobile = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer">
            <ul className="contact">
                <li>
                    <a href="https://www.facebook.com/daliatheta?ref=br_tf" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon" title="פייסבוק" icon={faFacebookSquare} />
                    </a>
                    <p className="icon-desc">פייסבוק</p>
                </li>
                <li>
                    <a href="https://wa.me/972522480312">
                        <FontAwesomeIcon className="icon" title="וואטסאפ" icon={faWhatsapp} />
                    </a>
                    <p className="icon-desc">וואטסאפ</p>
                </li>
                <li>
                    <a href="mailto: dool52@walla.com">
                        <FontAwesomeIcon className="icon" title="אימייל" icon={faEnvelope} />
                    </a>
                    <p className="icon-desc">אימייל</p>
                </li>
                <li>
                    <Link to="contact">
                        <FontAwesomeIcon className="icon" title="טופס שליחת הודעה" icon={faEnvelopeOpenText} />
                    </Link>
                    <p className="icon-desc">הודעה</p>
                </li>
                <li onClick={scrollTop}>
                    <FontAwesomeIcon className="icon" title="להתחלה" icon={faAngleDoubleUp} />
                    <p className="icon-desc">למעלה</p>
                </li>
            </ul>
        </div>
    )
}

export default FooterMobile;