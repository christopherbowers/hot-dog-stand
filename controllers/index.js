const Main = require('../models/main');

const createMain = async (req, res) => {
  try {
    const plant = await new Main(req.body)
    await plant.save()
    return res.status(201).json({
      plant,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}


const getAllMains = async (req, res) => {
  try {
    const plants = await Main.find()
    return res.status(200).json({
      plants
    })
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getMainById = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const plant = await Main.findById(id)
    if (plant) {
      return res.status(200).json({
        plant
      });
    }
    return res.status(404).send('Main with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateMain = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    await Main.findByIdAndUpdate(id, req.body, (err, plant) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!plant) {
        res.status(500).send('Main not found!');
      }
      return res.status(200).json(plant);
    }).clone().catch()
  } catch (error) {
    return res.status(501).send(error.message);
  }
}

const deleteMain = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const deleted = await Main.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Main deleted");
    }
    throw new Error("Main not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  createMain,
  getAllMains,
  getMainById,
  updateMain,
  deleteMain
}