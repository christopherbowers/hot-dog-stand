const MenueCard = (props) => {

  return (
    <div className="menu-card">
        <h4>{props.name}</h4>
        <p>Quantity: {props.quantity}</p>
        <p>Price: ${props.price}</p>
    </div>
  )
}

export default MenueCard