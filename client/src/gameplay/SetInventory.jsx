import GameNav from "../components/GameNav";
// import MenuCard from "../components/MenuCard";

const SetInventory = (props) => {

  return (
    <div>
      <GameNav />
      <h2>Set Inventory</h2>
      <section className="inventory-container">
        <section className="inventory-items">
          <form onSubmit={ props.updateBurgers }>
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputQuantity } 
              placeholder="Add Inventory" 
              name="quantity" />
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputPrice } 
              placeholder="Set Price" 
              name="price"/>
            <button type="submit">Update Hamburgers</button>
          </form>
        </section>
        <section className="inventory-items">
          <form onSubmit={ props.updateHotDogs }>
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputQuantity } 
              placeholder="Add Inventory" 
              name="quantity" />
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputPrice } 
              placeholder="Set Price" 
              name="price"/>
            <button type="submit">Update Hot Dogs</button>
          </form>
        </section>
        <section className="inventory-items">
          <form onSubmit={ props.updateWings }>
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputQuantity } 
              placeholder="Add Inventory" 
              name="quantity" />
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputPrice } 
              placeholder="Set Price" 
              name="price"/>
            <button type="submit">Update Wings</button>
          </form>
        </section>
        {/* <section className="inventory-items">
          <form onSubmit={ props.updateFries }>
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputQuantity } 
              placeholder="Add Inventory" 
              name="quantity" />
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputPrice } 
              placeholder="Set Price" 
              name="price"/>
            <button type="submit">Update Fries</button>
          </form>
        </section>
        <section className="inventory-items">
          <form onSubmit={ props.updateChips }>
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputQuantity } 
              placeholder="Add Inventory" 
              name="quantity" />
            <input type="number" 
              min="0" 
              onChange={ props.onChange } 
              value={ props.inputPrice } 
              placeholder="Set Price" 
              name="price"/>
            <button type="submit">Update Chips</button>
          </form>
        </section> */}
      </section>
    </div>
  )
}

export default SetInventory