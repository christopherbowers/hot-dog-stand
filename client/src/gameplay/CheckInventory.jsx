import React, { useEffect, useState } from "react";
import axios from 'axios';
import MainCard from "../components/MainCard";
import SideCard from "../components/SideCard";
import DrinkCard from "../components/DrinkCard";

const CheckInventory = () => {

  const[mains, setMains] = useState([]);
  const[sides, setSides] = useState([]);
  const[drinks, setDrinks] = useState([]);

  const getMains = async () => {
    const res = await axios.get('http://localhost:3001/api/mains');
    setMains(res.data.mains);
  }

  const getSides = async () => {
    const res = await axios.get('http://localhost:3001/api/sides');
    setSides(res.data.sides);
  }

  const getDrinks = async () => {
    const res = await axios.get('http://localhost:3001/api/drinks');
    setDrinks(res.data.drinks);
  }

  useEffect(() => {
    getMains();
    getSides();
    getDrinks();
  }, []);

  return (
    <div>
      <h2>Check Inventory</h2>
      <section className="inventory-container">
        <section className="inventory-items">
          <h3>Mains</h3>
          {mains.map((main) => (
            <MainCard 
              key={main._id}
              name={main.name}
              quantity={main.quantity}
              price={main.price}
            />
          ))}
        </section>
        <section className="inventory-items">
          <h3>Sides</h3>
          {sides.map((side) => (
            <SideCard 
              key={side._id}
              name={side.name}
              quantity={side.quantity}
              price={side.price}
            />
          ))}
        </section>
        <section className="inventory-items">
          <h3>Drinks</h3>
          {drinks.map((drink) => (
            <DrinkCard 
              key={drink._id}
              name={drink.name}
              quantity={drink.quantity}
              price={drink.price}
            />
          ))}
        </section>
      </section>
    </div>
  )
}

export default CheckInventory