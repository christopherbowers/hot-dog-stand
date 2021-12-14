import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Hot Dog Stand</h1>
      <nav className="bradley-fake-stats-beal">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/instructions">Instructions</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header;