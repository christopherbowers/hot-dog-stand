import React from "react"
import GameNav from "../components/GameNav"

const OpenShop = (props) => {
  // Mains
  const burgers = props.mains[0]
  const initialBurgerCount = parseInt(burgers.quantity)
  const burgerMargin = parseInt(burgers.price) - parseInt(burgers.cost)
  let burgerCustomers
  if (burgerMargin <= 1) {
    burgerCustomers = 1
  } else if (burgerMargin <= 2) {
    burgerCustomers = 0.75
  } else if (burgerMargin <= 4) {
    burgerCustomers = 0.5
  } else if (burgerMargin <= 6) {
    burgerCustomers = 0.25
  } else {
    burgerCustomers = 0
  }
  const burgersSold = parseInt(Math.floor(Math.random() * initialBurgerCount * burgerCustomers));

  const hotDogs = props.mains[1]
  const initialHotDogCount = parseInt(hotDogs.quantity)
  const hotDogMargin = parseInt(hotDogs.price) - parseInt(hotDogs.cost)
  let hotDogCustomers
  if (hotDogMargin <= 1) {
    hotDogCustomers = 1
  } else if (hotDogMargin <= 2) {
    hotDogCustomers = 0.75
  } else if (hotDogMargin <= 4) {
    hotDogCustomers = 0.5
  } else if (hotDogMargin <= 5) {
    hotDogCustomers = 0.25
  } else {
    hotDogCustomers = 0
  }
  const hotDogsSold = Math.floor(Math.random() * initialHotDogCount * hotDogCustomers);

  const wings = props.mains[2]
  const initialWingsCount = parseInt(wings.quantity)
  const wingsMargin = parseInt(wings.price) - parseInt(wings.cost)
  let wingsCustomers
  if (wingsMargin <= 1) {
    wingsCustomers = 1
  } else if (wingsMargin <= 2) {
    wingsCustomers = 0.75
  } else if (wingsMargin <= 4) {
    wingsCustomers = 0.5
  } else if (wingsMargin <= 6) {
    wingsCustomers = 0.25
  } else {
    wingsCustomers = 0
  }
  const wingsSold = Math.floor(Math.random() * initialWingsCount * wingsCustomers);

  // Sides
  const fries = props.sides[0]
  const initialFriesCount = parseInt(fries.quantity)
  const friesMargin = parseInt(fries.price) - parseInt(fries.cost)
  let friesCustomers
  if (friesMargin <= 1) {
    friesCustomers = 1
  } else if (friesMargin <= 2) {
    friesCustomers = 0.75
  } else if (friesMargin <= 3) {
    friesCustomers = 0.5
  } else if (friesMargin <= 4) {
    friesCustomers = 0.25
  } else {
    friesCustomers = 0.1
  }
  const friesSold = Math.floor(Math.random() * initialFriesCount * friesCustomers);
  
  const chips = props.sides[1]
  const initialChipsCount = parseInt(chips.quantity)
  const chipsMargin = parseInt(chips.price) - parseInt(chips.cost)
  let chipsCustomers
  if (chipsMargin <= 1) {
    chipsCustomers = 1
  } else if (chipsMargin <= 2) {
    chipsCustomers = 0.75
  } else if (chipsMargin <= 3) {
    chipsCustomers = 0.5
  } else if (chipsMargin <= 4) {
    chipsCustomers = 0.25
  } else {
    chipsCustomers = 0.1
  }
  const chipsSold = Math.floor(Math.random() * initialChipsCount * chipsCustomers);

  const macAndCheese = props.sides[2]
  const initialMacAndCheeseCount = parseInt(macAndCheese.quantity)
  const macAndCheeseMargin = parseInt(macAndCheese.price) - parseInt(macAndCheese.cost)
  let macAndCheeseCustomers
  if (macAndCheeseMargin <= 1) {
    macAndCheeseCustomers = 1
  } else if (macAndCheeseMargin <= 2) {
    macAndCheeseCustomers = 0.75
  } else if (macAndCheeseMargin <= 3) {
    macAndCheeseCustomers = 0.5
  } else if (macAndCheeseMargin <= 4) {
    macAndCheeseCustomers = 0.25
  } else {
    macAndCheeseCustomers = 0.1
  }
  const macAndCheeseSold = Math.floor(Math.random() * initialMacAndCheeseCount * macAndCheeseCustomers);

  // Drinks
  const lemonade = props.drinks[0]
  const initialLemonadeCount = parseInt(lemonade.quantity)
  const lemonadeMargin = parseInt(lemonade.price) - parseInt(lemonade.cost)
  let lemonadeCustomers
  if (lemonadeMargin <= 1) {
    lemonadeCustomers = 1
  } else if (lemonadeMargin <= 2) {
    lemonadeCustomers = 0.75
  } else if (lemonadeMargin <= 3) {
    lemonadeCustomers = 0.5
  } else if (lemonadeMargin <= 4) {
    lemonadeCustomers = 0.25
  } else {
    lemonadeCustomers = 0.1
  }
  const lemonadeSold = Math.floor(Math.random() * initialLemonadeCount * lemonadeCustomers);

  const cola = props.drinks[1]
  const initialColaCount = parseInt(cola.quantity)
  const colaMargin = parseInt(cola.price) - parseInt(cola.cost)
  let colaCustomers
  if (colaMargin <= 1) {
    colaCustomers = 1
  } else if (colaMargin <= 2) {
    colaCustomers = 0.75
  } else if (colaMargin <= 3) {
    colaCustomers = 0.5
  } else if (colaMargin <= 4) {
    colaCustomers = 0.25
  } else {
    colaCustomers = 0.1
  }
  const colaSold = Math.floor(Math.random() * initialColaCount * colaCustomers);

  const rootBeer = props.drinks[2]
  const initialRootBeerCount = parseInt(rootBeer.quantity)
  const rootBeerMargin = parseInt(rootBeer.price) - parseInt(rootBeer.cost)
  let rootBeerCustomers
  if (rootBeerMargin <= 1) {
    rootBeerCustomers = 1
  } else if (rootBeerMargin <= 2) {
    rootBeerCustomers = 0.75
  } else if (rootBeerMargin <= 3) {
    rootBeerCustomers = 0.5
  } else if (rootBeerMargin <= 4) {
    rootBeerCustomers = 0.25
  } else {
    rootBeerCustomers = 0.1
  }
  const rootBeerSold = Math.floor(Math.random() * initialRootBeerCount * rootBeerCustomers);

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
      <section className="sides-container">
        <h3>Sides</h3>
        <div className="results-item">
          <h4>{ fries.name }</h4>
          <h5>Items Sold:</h5>
          <p>{ friesSold }</p>
          <h5>Total Sales:</h5>
          <p>${ friesSold * fries.price }</p>
        </div>
        <div className="results-item">
          <h4>{ chips.name }</h4>
          <h5>Items Sold:</h5>
          <p>{ chipsSold }</p>
          <h5>Total Sales:</h5>
          <p>${ chipsSold * chips.price }</p>
        </div>
        <div className="results-item">
          <h4>{ macAndCheese.name }</h4>
          <h5>Items Sold:</h5>
          <p>{ macAndCheeseSold }</p>
          <h5>Total Sales:</h5>
          <p>${ macAndCheeseSold * macAndCheese.price }</p>
        </div>
      </section>
      <section className="drinks-container">
        <h3>Drinks</h3>
        <div className="results-item">
          <h4>{ lemonade.name }</h4>
          <h5>Items Sold:</h5>
          <p>{ lemonadeSold }</p>
          <h5>Total Sales:</h5>
          <p>${ lemonadeSold * lemonade.price }</p>
        </div>
        <div className="results-item">
          <h4>{ cola.name }</h4>
          <h5>Items Sold:</h5>
          <p>{ colaSold }</p>
          <h5>Total Sales:</h5>
          <p>${ colaSold * cola.price }</p>
        </div>
        <div className="results-item">
          <h4>{ rootBeer.name }</h4>
          <h5>Items Sold:</h5>
          <p>{ rootBeerSold }</p>
          <h5>Total Sales:</h5>
          <p>${ rootBeerSold * rootBeer.price }</p>
        </div>
      </section>
    </div>
  )
}

export default OpenShop