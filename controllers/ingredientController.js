const Ingredient = require("../models/Ingredient");

exports.getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json({ data: ingredients });
  } catch (err) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
};
