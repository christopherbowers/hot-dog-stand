import React from 'react';

const DrinkCard = (props) => {

  return (
    <div className="menu-card">
       <h4>{props.name}</h4>
        <p>Quantity: {props.qty}</p>
        <p>Price: {props.price}</p>    </div>
  )
}

export default DrinkCard