const {Main, Side, Drink } = require('../models/')


/* GET 
--------------------------------------------*/

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

/* PUT 
--------------------------------------------*/

//TODO: convert params to lowercase

// app.get('/fruits/:name', (req, res) => {
//   let lowerCaseFruit = (req.params.name).toLowerCase()
//   const fruit = fruits.find( ({ name }) => name.toLowerCase() === lowerCaseFruit )
//   res.send(fruit.name)
// })


const updateMains = async (req, res) => {
  try {
    const { name } = req.params;
    await Main.findOneAndUpdate(name, req.body, (err, main) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!main) {
        res.status(500).send('Main not found!');
      }
      return res.status(200).json(main);
    }).clone().catch()
  } 
  catch (error) {
    return res.status(501).send(error.message)
  }
}

const updateSides = async (req, res) => {
  try {
    const { name } = req.params;
    await Side.findOneAndUpdate(name, req.body, (err, side) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!main) {
        res.status(500).send('Side not found!');
      }
      return res.status(200).json(side);
    }).clone().catch()
  } 
  catch (error) {
    return res.status(501).send(error.message)
  }
}

const updateDrinks = async (req, res) => {
  try {
    const { name } = req.params;
    await Drink.findOneAndUpdate(name, req.body, (err, drink) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!main) {
        res.status(500).send('Drink not found!');
      }
      return res.status(200).json(drink);
    }).clone().catch()
  } 
  catch (error) {
    return res.status(501).send(error.message)
  }
}



module.exports = {
  getAllMains,
  getAllSides,
  getAllDrinks,
  updateMains,
  updateSides,
  updateDrinks
}