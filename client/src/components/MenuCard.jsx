import { NavLink } from "react-router-dom"

const MenuCard = (props) => {

  return (
    <NavLink to="/game/set-inventory">
      <div className="menu-card">
        <h4>{props.name}</h4>
        <p>Quantity: {props.quantity}</p>
        <p className="price">Price: ${props.price}</p>
      </div>
    </NavLink>
  )
}

export default MenuCard