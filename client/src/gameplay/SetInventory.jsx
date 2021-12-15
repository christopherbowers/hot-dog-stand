import GameNav from "../components/GameNav";
// import MenuCard from "../components/MenuCard";

const SetInventory = (props) => {

  return (
    <div>
      <GameNav />
      <h2>Set Inventory</h2>
      <section className="inventory-container">
        <section className="inventory-items">
          <form onSubmit={ props.onSubmit }>
            <input type="number" min="0" onChange={ props.onChange } value={ props.inputQuantity } placeholder="Add Inventory" name="quantity" />
            <button type="submit">Order Inventory</button>
            <input type="number" min="0" onChange={ props.onChange } value={ props.inputPrice } placeholder="Add Inventory" name="price"/>
            <button type="submit">Order Inventory</button>
          </form>
        </section>
      </section>
    </div>
  )
}

export default SetInventory