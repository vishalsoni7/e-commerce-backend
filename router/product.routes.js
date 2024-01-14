const express = require("express");
const productRouter = express.Router();
const Product = require("../modal/product.modal");

productRouter.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

productRouter.post("/products", async (req, res) => {
  try {
    const { name, image, ideal, price, shoeSize, description } = req.body;

    if (!name || !image || !ideal || !price || !shoeSize || !description) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    const newProduct = new Product({
      name,
      image,
      ideal,
      price,
      shoeSize,
      description,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = productRouter;
