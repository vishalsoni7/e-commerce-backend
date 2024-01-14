const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  ideal: String,
  price: Number,
  shoeSize: [Number],
  description: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
