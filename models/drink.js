const { Schema } = require('mongoose')

const Drink = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: String, required: true }
  },
  { timestamps: true },
)

module.exports = Drink