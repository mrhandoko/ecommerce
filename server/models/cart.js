var mongoose = require('mongoose')

var cartSchema = mongoose.Schema({
  memberid: String,
  total: Number,
  author: String,
  category: String,
  stock: Number,
  price: Number,
  description: String
})

var Cart = mongoose.model('Book', cartSchema)

module.exports = Cart
