import React, { useEffect, useContext } from 'react';
import '../style/Therapy.scss';
import TherapyData from '../assets/TherapyAPI';
import Context from './Context';

const Therapy = () => {
    const { therapy, handleClick } = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="therapy">
            <div className="buttons">
                <button id="AccessBars"
                    onClick={() => handleClick("AccessBars")}
                    className={therapy === "AccessBars" ? "button selected" : "button"}>אקסס בארס
                    
                </button>
                <button id="ThetaHealing"
                    onClick={() => handleClick("ThetaHealing")}
                    className={therapy === "ThetaHealing" ? "button selected" : "button"}
                    >תטא הילינג
                </button>
                <button id="TarotCards"
                    onClick={() => handleClick("TarotCards")}
                    className={therapy === "TarotCards" ? "button selected" : "button"}
                    >קלפי טארוט
                </button>
                <button id="BachFlowers"
                    onClick={() => handleClick("BachFlowers")}
                    className={therapy === "BachFlowers" ? "button selected" : "button"}
                    >פרחי באך
                </button>
                <button id="Crystals"
                    onClick={() => handleClick("Crystals")}
                    className={therapy === "Crystals" ? "button selected" : "button"}
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