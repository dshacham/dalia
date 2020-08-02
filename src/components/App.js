
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Context from './Context';
import NavBar from './NavBar';

function App() {
  const [navClass, setNavClass] = useState('/');
  const [winWidth, setWinWidth] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    window.innerWidth > 768 ?
      setWinWidth('desktop')
      :
      setWinWidth('mobile')
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ navClass, setNavClass, winWidth, setWinWidth }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </Context.Provider>
    </div>
  );
}


export default App;