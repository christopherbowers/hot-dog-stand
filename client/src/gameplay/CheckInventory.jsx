import MenuCard from "../components/MenuCard";

const CheckInventory = (props) => {

  return (
    <div>
      <h2>Check Inventory</h2>
      <section className="inventory-container">
        <section className="inventory-items">
          <h3>Mains</h3>
          {
            props.mains.map((main) => (
              <MenuCard 
                key={main._id}
                name={main.name}
                quantity={main.quantity}
                price={main.price}
              />
            ))
          }
        </section>
        <section className="inventory-items">
          <h3>Sides</h3>
          {
            props.sides.map((side) => (
              <MainCard 
                key={ side._id }
                name={ side.name }
                quantity={ side.quantity }
                price={ side.price }
              />
            ))
          }
        </section>
        <section className="inventory-items">
          <h3>Drinks</h3>
          {props.drinks.map((drink) => (
            <MenuCard 
              key={ drink._id }
              name={ drink.name }
              quantity={ drink.quantity }
              price={ drink.price }
            />
          ))}
        </section>
      </section>
    </div>
  )
}

export default CheckInventory