import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Game from './pages/Game';
import Instructions from './pages/Instructions';
import About from './pages/About';
import CheckInventory from './gameplay/CheckInventory';
import SetInventory from './gameplay/SetInventory';
import OpenShop from './gameplay/OpenShop';

const App = () => {
  const [mains, setMains] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [inputValue, setInputValue] = useState({
    price: '',
    quantity: null
  });
  // const [inputQuantity, setInputQuantity] = useState('');

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

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const updateBurgers = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api/mains/${mains[0]._id}`, {
        price: inputValue.price,
        quantity: parseInt(inputValue.quantity) + mains[0].quantity
      })
      .then((response) => {
        setMains(response.data.price);
        setMains(response.data.quantity);
      });
  };

  const updateHotDogs = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api/mains/${mains[1]._id}`, {
        price: inputValue.price,
        quantity: parseInt(inputValue.quantity) + mains[1].quantity
      })
      .then((response) => {
        setMains(response.data.price);
        setMains(response.data.quantity);
      });
  };

  const updateWings = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api/mains/${mains[2]._id}`, {
        price: inputValue.price,
        quantity: parseInt(inputValue.quantity) + mains[2].quantity
      })
      .then((response) => {
        setMains(response.data.price);
        setMains(response.data.quantity);
      });
  };

  // const updateFries = (e) => {
  //   e.preventDefault();
  //   axios
  //     .put(`http://localhost:3001/api/sides/${sides[0]._id}`, {
  //       price: inputValue.price,
  //       quantity: parseInt(inputValue.quantity) + sides[0].quantity
  //     })
  //     .then((response) => {
  //       setSides(response.data.price);
  //       setSides(response.data.quantity);
  //     });
  // };

  // const updateChips = (e) => {
  //   e.preventDefault();
  //   axios
  //     .put(`http://localhost:3001/api/sides/${sides[1]._id}`, {
  //       price: inputValue.price,
  //       quantity: parseInt(inputValue.quantity) + sides[1].quantity
  //     })
  //     .then((response) => {
  //       setSides(response.data.price);
  //       setSides(response.data.quantity);
  //     });
  // };

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/about" component={About} />
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
          <Route
            path="/game/set-inventory"
            render={(props) => (
              <SetInventory
                {...props}
                mains={mains}
                sides={sides}
                drinks={drinks}
                onChange={handleChange}
                inputValue={inputValue}
                updateBurgers={updateBurgers}
                updateHotDogs={updateHotDogs}
                updateWings={updateWings}
                // updateFries={updateFries}
                // updateChips={updateChips}
              />
            )}
          />
          <Route
            path="/game/open-shop"
            component={(props) => (
              <OpenShop
                {...props}
                mains={mains}
                sides={sides}
                drinks={drinks}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
