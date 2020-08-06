import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../style/Mezuzot.scss';
import MezuzotData from '../assets/MezuzotAPI';
import Context from './Context';

const Mezuzot = () => {
    const { setNavClass } = useContext(Context);
    const [isDescOpen, setIsDescOpen] = useState('');
    const [isImgOpen, setIsImgOpen] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mezuzot">
            <div className="mezuzot-text">
                <p>המזוזות נעשות בעבודת יד ובקפידה רבה, וניתנות לשליחה בדואר או לאיסוף עצמי.</p>
                <p>*לבירורים והזמנות ניתן <Link to="contact" onClick={() => setNavClass("/contact")}>ליצור קשר</Link> בכל אחת מהדרכים המוצעות באתר.</p>
            </div>
            <div className="mezuzot-container">
                {MezuzotData.map((item, i) => {
                    return (
                        <ul className="ul-mezuzot" key={i}>
                            <li><img src={item.img}
                                alt={item.name}
                                className="mezuza-img"
                                onClick={() => setIsImgOpen(item.name)} />
                            </li>
                            <li>
                                <ul className={isImgOpen === item.name ? "desc-img show" : "desc-img"}>
                                    <li>
                                        <span className="close" onClick={() => setIsImgOpen('')}>&times;</span>
                                    </li>
                                    <li>
                                        <img src={item.img} alt="mezuza" className="mezuza-content" />
                                    </li>
                                </ul>
                            </li>
                            <li className="mezuza-name">{item.name}</li>
                            {item.desc ?
                                <Fragment>
                                    <li className="desc" onClick={() => setIsDescOpen(item.descName)}><button className="desc-btn">הסבר</button></li>
                                    <li>
                                        <ul className={isDescOpen === item.descName ? "desc-img show" : "desc-img"}>
                                            <li><span className="close" onClick={() => setIsDescOpen('')}>&times;</span></li>
                                            <li><img src={item.desc} alt="הסבר" className="desc-content" /></li>
                                        </ul>
                                    </li>
                                </Fragment>
                                : null
                            }
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default Mezuzot;