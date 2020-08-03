import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import SlideInNav from './SlideInNav';
import Footer from './Footer';
import FooterMobile from './FooterMobile';

function App() {
  const [winWidth, setWinWidth] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.innerWidth > 768 ?
      setWinWidth('desktop')
      :
      setWinWidth('mobile')
  }, []);

  return (
    <div className="App">
      <Router>
        {winWidth === 'desktop' ?
          <NavBar />
          :
          <SlideInNav />
        }
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        {winWidth === 'desktop' ?
          <Footer />
          :
          <FooterMobile />
        }
      </Router>
    </div>
  );
}


export default App;