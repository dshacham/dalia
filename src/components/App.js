import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import SlideInNav from './SlideInNav';
import Footer from './Footer';
import FooterMobile from './FooterMobile';
import Context from './Context';
import Therapy from './Therapy';
import Mezuzot from './Mezuzot';

function App() {
  const [winWidth, setWinWidth] = useState('');
  const [navClass, setNavClass] = useState('/');
  const [therapyClass, setTherapyClass] = useState('');
  const [therapy, setTherapy] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setNavClass(window.location.pathname);
  }, []);

  useEffect(() => {
    window.innerWidth > 768 ?
      setWinWidth('desktop')
      :
      setWinWidth('mobile')
  }, []);

  const handleClick = (id) => {
    setTherapy(id);
  }

  return (
    <div className="App">
      <Context.Provider value={{ navClass, setNavClass, therapyClass, setTherapyClass, therapy, setTherapy, handleClick }}>
        <Router>
          {winWidth === 'desktop' ?
            <NavBar />
            :
            <SlideInNav />
          }
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/therapy" exact component={Therapy} />
            <Route path="/mezuzot" exact component={Mezuzot} />
          </Switch>
          {winWidth === 'desktop' ?
            <Footer />
            :
            <FooterMobile />
          }
        </Router>
      </Context.Provider>
    </div>
  );
}


export default App;