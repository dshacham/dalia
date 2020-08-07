import React, { useState, useContext, useEffect } from 'react';
import '../style/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSpinner, faCheckDouble, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import Context from './Context';

const Contact = () => {
    const { winWidth } = useContext(Context);

    const [form, setForm] = useState(1);
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm(2);

        const templateParams = {
            name: contactName,
            email: contactEmail,
            message: contactMessage
        };
      
    emailjs.send('gmail','template_SnAZau6G', templateParams, 'user_70yCWeXqTuJH3nHAJpBLU')
    .then((response) => {
        response.status ? setForm(3) : alert('חלה שגיאה בשליחת הטופס. אנא בדקו את הפרטים המוזנים.');
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
    };

    return (
        <div className="contact">
        {
                form === 1 ?
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2 className="h2-contact">טופס שליחת הודעה</h2>
                        <label className="contact-label">שם *
                            <input
                                className="contact-input"
                                type="text"
                                value={contactName}
                                required
                                onChange={(e) => setContactName(e.target.value)} />
                        </label>
                        <label className="contact-label">אימייל *
                            <input
                                className="contact-input"
                                type="email"
                                value={contactEmail}
                                required
                                onChange={(e) => setContactEmail(e.target.value)} />
                        </label>
                        <label className="contact-label">הודעה *
                            <textarea rows="8" cols="50"
                                className="contact-textarea"
                                type="text"
                                value={contactMessage}
                                required
                                onChange={(e) => setContactMessage(e.target.value)} />
                        </label>
                        <h5 className="h5-contact"> * שדה חובה </h5>
                        <button
                            type="submit"
                            className="send-btn">שליחה</button>
                    </form>
                    : form === 2 ?
                        <div className="loading-message">
                            <p><FontAwesomeIcon icon={faSpinner} spin style={{ color: "rgb(37, 110, 172)" }} /> הודעה נשלחת...</p>
                        </div>
                        :
                        <div className="thanks">
                            <p>תודה על ההודעה! <FontAwesomeIcon icon={faCheckDouble} style={{ color: "rgb(0, 186, 211)" }} /></p>
                        </div>
            }
            <div className="or-container">
                <h4 className="h4-contact">או:</h4>
            </div>
            <ul className="other-container">
                <li className="li-contact">
                    <a href="https://www.facebook.com/daliatheta?ref=br_tf" id="fb-icon" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon" title="פייסבוק" icon={faFacebookSquare} />
                    </a>
                    <p className="icon-desc">פייסבוק</p>
                </li>
                <li className={winWidth === "mobile" ? "li-contact" : "hide"}>
                    <a href="https://wa.me/972522480312" id="wa-icon">
                        <FontAwesomeIcon className="icon" title="וואטסאפ" icon={faWhatsapp} />
                    </a>
                    <p className="icon-desc">וואטסאפ</p>
                </li>
                <li className={winWidth === "desktop" ? "li-contact" : "hide"}>
                        <FontAwesomeIcon className="icon" id="ph-icon" title="נייד" icon={faPhoneSquare} />
                    <p className="icon-desc">0522480312</p>
                </li>
                <li className="li-contact">
                    <a href="mailto: dool52@walla.com" id="em-icon">
                        <FontAwesomeIcon className="icon" title="אימייל" icon={faEnvelope} />
                    </a>
                    <p className="icon-desc">אימייל</p>
                </li>
            </ul>
        </div>
    )
}
export default Contact;