import React from 'react';
import { NavLink } from 'react-router-dom'

const GameNav = () => {
  return (
    <header>
      <h2>Game</h2>
      <nav className="bradley-fake-stats-meal">
        <NavLink to="/game/check-inventory">Check Inventory</NavLink>
        <NavLink to="/game/set-inventory">Set Inventory</NavLink>
        <NavLink to="/game/open-shop">Open Shop</NavLink>
      </nav>
    </header>
  )
}

export default GameNav;