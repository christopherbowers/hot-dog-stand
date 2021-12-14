const MenuCard = (props) => {

  return (
    <div className="menu-card">
        <h4>{props.name}</h4>
        <p>Quantity: {props.quantity}</p>
        <p className="price">Price: ${props.price}</p>
    </div>
  )
}

export default MenuCard