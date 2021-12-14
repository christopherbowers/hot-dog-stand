const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Side = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: String, required: true },
    cost: { type: String, required: true }
  },
  { timestamps: true },
)

module.exports = Side