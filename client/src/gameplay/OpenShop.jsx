import React from "react"
import GameNav from "../components/GameNav"

const OpenShop = (props) => {
  console.log(props)

  // Mains
  const burgers = props.mains[0]
  const initialBurgerCount = parseInt(burgers.quantity)
  const burgersSold = Math.floor(Math.random() * initialBurgerCount);
  const burgersLeft = initialBurgerCount - burgersSold;

  const hotDogs = props.mains[1]
  const initialHotDogCount = parseInt(hotDogs.quantity)
  const hotDogsSold = Math.floor(Math.random() * initialHotDogCount);
  const hotDogsLeft = initialHotDogCount - hotDogsSold;

  const wings = props.mains[2]
  const initialWingsCount = parseInt(wings.quantity)
  const wingsSold = Math.floor(Math.random() * initialWingsCount);
  const wingsLeft = initialWingsCount - wingsSold;

  // Sides
  const fries = props.sides[0]
  const initialFriesCount = parseInt(fries.quantity)
  const friesSold = Math.floor(Math.random() * initialFriesCount);
  const friesLeft = initialFriesCount - friesSold;

  // const hotDogs = props.mains[1]
  // const initialHotDogCount = parseInt(hotDogs.quantity)
  // const hotDogsSold = Math.floor(Math.random() * initialHotDogCount);
  // const hotDogsLeft = initialHotDogCount - hotDogsSold;

  // const wings = props.mains[2]
  // const initialWingsCount = parseInt(wings.quantity)
  // const wingsSold = Math.floor(Math.random() * initialWingsCount);
  // const wingsLeft = initialWingsCount - wingsSold;

  // Drinks

  return (
    <div>
      <GameNav />
      <h2>Open Shop</h2>
      <section className="mains-container">
        <h3>Mains</h3>
        <div className="results-item">
          <h4>{ burgers.name }</h4>
          <h5>Starting Count:</h5>
          <p>{ initialBurgerCount }</p>
          <h5>Items Sold:</h5>
          <p>{ burgersSold }</p>
          <h5>Final Count:</h5>
          <p>{ burgersLeft }</p>
        </div>
        <div className="results-item">
          <h4>{ hotDogs.name }</h4>
          <h5>Starting Count:</h5>
          <p>{ initialHotDogCount }</p>
          <h5>Items Sold:</h5>
          <p>{ hotDogsSold }</p>
          <h5>Final Count:</h5>
          <p>{ hotDogsLeft }</p>
        </div>
        <div className="results-item">
          <h4>{ wings.name }</h4>
          <h5>Starting Count:</h5>
          <p>{ initialWingsCount }</p>
          <h5>Items Sold:</h5>
          <p>{ wingsSold }</p>
          <h5>Final Count:</h5>
          <p>{ wingsLeft }</p>
        </div>
      </section>
      <section className="sides-container">
        <h3>Sides</h3>
        <div className="results-item">
          <h4>{ fries.name }</h4>
          <h5>Starting Count:</h5>
          <p>{ initialFriesCount }</p>
          <h5>Items Sold:</h5>
          <p>{ friesSold }</p>
          <h5>Final Count:</h5>
          <p>{ friesLeft }</p>
        </div>
        <div className="results-item">
          <h4>{ hotDogs.name }</h4>
          <h5>Starting Count:</h5>
          <p>{ initialHotDogCount }</p>
          <h5>Items Sold:</h5>
          <p>{ hotDogsSold }</p>
          <h5>Final Count:</h5>
          <p>{ hotDogsLeft }</p>
        </div>
        <div className="results-item">
          <h4>{ wings.name }</h4>
          <h5>Starting Count:</h5>
          <p>{ initialWingsCount }</p>
          <h5>Items Sold:</h5>
          <p>{ wingsSold }</p>
          <h5>Final Count:</h5>
          <p>{ wingsLeft }</p>
        </div>
      </section>

    </div>
  )
}

export default OpenShop