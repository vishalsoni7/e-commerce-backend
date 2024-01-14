const express = require("express");
const categoryRouter = express.Router();
const Category = require("../modal/category.modal");

categoryRouter.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

categoryRouter.post("/categories", async (req, res) => {
  try {
    const { category, img } = req.body;

    if (!category || !img || !Array.isArray(img)) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const newCategory = new Category({
      category,
      img,
    });

    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = categoryRouter;
