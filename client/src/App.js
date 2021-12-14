import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Game from './pages/Game';
// import Instructions from './pages/Instructions';
// import About from './pages/About';
import CheckInventory from './gameplay/CheckInventory';
import OpenShop from './gameplay/OpenShop';

const App = () => {
  const [mains, setMains] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const getMains = async () => {
    const res = await axios.get('http://localhost:3001/api/mains');
    setMains(res.data.mains);
  };

  const getSides = async () => {
    const res = await axios.get('http://localhost:3001/api/sides');
    setSides(res.data.sides);
  };

  const getDrinks = async () => {
    const res = await axios.get('http://localhost:3001/api/drinks');
    setDrinks(res.data.drinks);
  };

  useEffect(() => {
    getMains();
    getSides();
    getDrinks();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          {/* <Route path="/instructions" component={Instructions} /> */}
          {/* <Route path="/about" component={About} /> */}
          <Route
            path="/game/check-inventory"
            component={(props) => (
              <CheckInventory
                {...props}
                mains={mains}
                sides={sides}
                drinks={drinks}
              />
            )}
          />
          <Route path="/game/open-shop" component={OpenShop} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
