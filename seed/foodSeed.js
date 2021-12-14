const db = require('../db')
const { Main, Drink, Side } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const insertMains = async () => {

  const mains = [
    {
      name: 'Hamburger',
      quantity: '0',
      price: '0',
      cost: '0'
    },
    {
      name: 'Hot Dog',
      quantity: '0',
      price: '0',
      cost: '0'
    },
    {
      name: 'Buffalo Wings',
      quantity: '0',
      price: '0',
      cost: '0'
    }
  ]

await Main.insertMany(mains)
  console.log('Created mains!')
}

const insertSides = async () => {
  
  const sides = [
    {
      name: 'French Fries',
      quantity: '0',
      price: '0',
      cost: '0'
      
    },
    {
      name: 'Chips',
      quantity: '0',
      price: '0',
      cost: '0'
    },
    {
      name: 'Mac and Cheese',
      quantity: '0',
      price: '0',
      cost: '0'
    }
  ]

await Side.insertMany(sides)
  console.log('Created sides!')
}

const insertDrinks = async () => {
  const drinks = [
    {
      name: 'Pink Lemonade',
      quantity: '0',
      price: '0',
      cost: '0'
    },
    {
      name: 'Cola',
      quantity: '0',
      price: '0',
      cost: '0'
    },
    {
      name: 'Root Beer',
      quantity: '0',
      price: '0',
      cost: '0'
    }
  ]

await Drink.insertMany(drinks)
  console.log('Created drinks!')
}

const dropDbs = async () => {
  await Main.collection.drop()
  await Side.collection.drop()
  await Drink.collection.drop()
  console.log('Dropped DBs')
}

const run = async () => {
  await dropDbs()
  await insertMains()
  await insertSides()
  await insertDrinks()
  db.close()
}


run()


