import GameNav from "../components/GameNav";
import MenuCard from "../components/MenuCard";

const CheckInventory = (props) => {

  return (
    <div>
      <GameNav />
      <h2>Check Inventory</h2>
      <section className="inventory-container">
        <section className="inventory-items">
          <h3>Mains</h3>
          { 
          // props.mains.length && 
            props.mains.map((main) => (
              <MenuCard 
                key={main._id}
                id={main._id}
                name={main.name}
                quantity={main.quantity}
                price={main.price}
              />
            ))
          }
        </section>
        <section className="inventory-items">
          <h3>Sides</h3>
          { props.sides.length &&
            props.sides.map((side) => (
              <MenuCard 
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
          { props.drinks.length &&
            props.drinks.map((drink) => (
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