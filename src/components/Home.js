import React, { useEffect } from 'react';
import '../style/Home.scss';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home">
            <h1>שלום עולם</h1>
        </div>
    )
}

export default Home;