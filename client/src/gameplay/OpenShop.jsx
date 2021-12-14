import React from "react"
import GameNav from "../components/GameNav"

const OpenShop = (props) => {
  console.log(props)

  // Mains
  const burgers = props.mains[0]
  const initialBurgerCount = parseInt(burgers.quantity)
  const burgerMargin = parseInt(burgers.price) - parseInt(burgers.cost)
  let burgerCustomers
  if (burgerMargin <= 1) {
    burgerCustomers = 1
  } else if (burgerMargin <= 2) {
    burgerCustomers = 0.75
  } else if (burgerMargin <= 3) {
    burgerCustomers = 0.5
  } else if (burgerMargin <= 4) {
    burgerCustomers = 0.25
  } else {
    burgerCustomers = 0.1
  }
  const burgersSold = parseInt(Math.floor(Math.random() * initialBurgerCount * burgerCustomers));
  const burgersLeft = initialBurgerCount - burgersSold;

  const hotDogs = props.mains[1]
  const initialHotDogCount = parseInt(hotDogs.quantity)
  const hotDogMargin = parseInt(hotDogs.price) - parseInt(hotDogs.cost)
  let hotDogCustomers
  if (hotDogMargin <= 1) {
    hotDogCustomers = 1
  } else if (hotDogMargin <= 2) {
    hotDogCustomers = 0.75
  } else if (hotDogMargin <= 3) {
    hotDogCustomers = 0.5
  } else if (hotDogMargin <= 4) {
    hotDogCustomers = 0.25
  } else {
    hotDogCustomers = 0.1
  }
  const hotDogsSold = Math.floor(Math.random() * initialHotDogCount * hotDogCustomers);
  const hotDogsLeft = initialHotDogCount - hotDogsSold;

  const wings = props.mains[2]
  const initialWingsCount = parseInt(wings.quantity)
  const wingsMargin = parseInt(wings.price) - parseInt(wings.cost)
  let wingsCustomers
  if (wingsMargin <= 1) {
    wingsCustomers = 1
  } else if (wingsMargin <= 2) {
    wingsCustomers = 0.75
  } else if (wingsMargin <= 3) {
    wingsCustomers = 0.5
  } else if (wingsMargin <= 4) {
    wingsCustomers = 0.25
  } else {
    wingsCustomers = 0.1
  }
  const wingsSold = Math.floor(Math.random() * initialWingsCount * wingsCustomers);
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
          <h5>Items Sold:</h5>
          <p>{ burgersSold }</p>
          <h5>Total Sales:</h5>
          <p>${ burgersSold * burgers.price }</p>
        </div>
        <div className="results-item">
          <h4>{ hotDogs.name }</h4>
          <h5>Items Sold:</h5>
          <p>{ hotDogsSold }</p>
          <h5>Total Sales:</h5>
          <p>${ hotDogsSold * hotDogs.price }</p>
        </div>
        <div className="results-item">
          <h4>{ wings.name }</h4>
          <h5>Items Sold:</h5>
          <p>{ wingsSold }</p>
          <h5>Final Count:</h5>
          <p>${ wingsSold * wings.price }</p>
        </div>
      </section>
      {/* <section className="sides-container">
        <h3>Sides</h3>
        <div className="results-item">
          <h4>{ fries.name }</h4>
          <h5>Items Sold:</h5>
          <p>{ friesSold }</p>
          <h5>Total Sales:</h5>
          <p>${ friesLeft * fries.price }</p>
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
      </section> */}

    </div>
  )
}

export default OpenShop