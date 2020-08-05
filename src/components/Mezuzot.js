import React, { useState, Fragment } from 'react';
import '../style/Mezuzot.scss';
import MezuzotData from '../assets/MezuzotAPI';

const Mezuzot = () => {
    const [isDescOpen, setIsDescOpen] = useState('');
    const [isImgOpen, setIsImgOpen] = useState('');

    return (
        <div className="mezuzot">
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
                                <li className="desc" onClick={() => setIsDescOpen(item.descName)}>הסבר</li>
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
    )
}

export default Mezuzot;