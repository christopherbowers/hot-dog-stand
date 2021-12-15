const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Main = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: String, required: true },
    cost: { type: String, required: true }
  },
  { timestamps: true },
)

module.exports = Main