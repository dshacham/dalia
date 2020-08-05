import React, { useState } from 'react';
import '../style/Therapy.scss';
import TherapyData from '../assets/TherapyAPI';

const Therapy = () => {
    const [therapy, setTherapy] = useState('');

    const handleClick = (id) => {
        setTherapy(id);
    }

    return (
        <div className="therapy">
            <div className="buttons">
                <button
                    onClick={() => handleClick("AccessBars")}
                    className={therapy === "AccessBars" ? "selected" : ""}>אקסס בארס
                    
                </button>
                <button
                    onClick={() => handleClick("ThetaHealing")}
                    className={therapy === "ThetaHealing" ? "selected" : ""}
                    >תטא הילינג
                </button>
                <button
                    onClick={() => handleClick("TarotCards")}
                    className={therapy === "TarotCards" ? "selected" : ""}
                    >קלפי טארוט
                </button>
                <button
                    onClick={() => handleClick("BachFlowers")}
                    className={therapy === "BachFlowers" ? "selected" : ""}
                    >פרחי באך
                </button>
                <button
                    onClick={() => handleClick("Crystals")}
                    className={therapy === "Crystals" ? "selected" : ""}
                    >אבני קריסטל
                </button>
            </div>
            <div className="therapy-content">
                {TherapyData.map((item) => {
                    return (
                        item.id === therapy ?
                            <ul className="therapy-card" key={item.id}>
                                <li className="therapy-img"><img src={item.img} alt={item.title} /></li>
                                <li className="therapy-title">{item.title}</li>
                                <li className="therapy-desc">
                                    <ul className="desc-ul">
                                        {item.desc.map((el, i) => {
                                            return (
                                                <li key={i}>{el}</li>
                                            );
                                        })
                                        }
                                    </ul>
                                </li>
                                { 
                                    item.adv ?
                                <li className="therapy-adv">
                                    <ul className="adv-ul">
                                        {item.adv.map((element, i) => {
                                            return (
                                                <li key={i}>{element}</li>
                                            );
                                        })
                                        }
                                    </ul>
                                </li>
                                : null
                                }
                                {
                                    item.desc2 ?
                                        <li className="therapy-desc2">
                                            <ul className="desc2-ul">
                                                {item.desc2.map((element, i) => {
                                                    return (
                                                        <li key={i}>{element}</li>
                                                    );
                                                })
                                                }
                                            </ul>
                                        </li>
                                        : null
                                }
                            </ul>
                            : null
                    );
                })}
            </div>
        </div>
    );
};

export default Therapy;