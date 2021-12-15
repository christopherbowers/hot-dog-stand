import GameNav from "../components/GameNav";
// import MenuCard from "../components/MenuCard";

const SetInventory = (props) => {

  return (
    <div>
      <GameNav />
      <h2>Set Inventory</h2>
      <section className="inventory-container">
        <section className="inventory-items">
          <form>
            <input type="text" onChange={ props.handleChange } value={ props.inputDisplay } />
          </form>
        </section>
      </section>
    </div>
  )
}

export default SetInventory