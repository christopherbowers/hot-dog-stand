const { model } = require('mongoose')
const MainSchema = require('./main')
const SideSchema = require('./side')
const DrinkSchema = require('./drink')

const Main = model('mains', MainSchema)
const Side = model('sides', DrinkSchema)
const Drink = model('drinks', DrinkSchema)

module.exports = {
  Main,
  Side,
  Drink
}