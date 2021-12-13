const Main = require('../models/main')
const Side = require('../models/side')
const Drink = require('../models/drink')

const getAllMains = async (req, res) => {
  try {
    const mains = await Main.find()
    return res.status(200).json({ mains })
  } 
  catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllSides = async (req, res) => {
  try {
    const sides = await Side.find()
    return res.status(200).json({ sides })
  } 
  catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllDrinks = async (req, res) => {
  try {
    const drinks = await Side.find()
    return res.status(200).json({ drinks })
  } 
  catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllMains,
  getAllSides,
  getAllDrinks  
}