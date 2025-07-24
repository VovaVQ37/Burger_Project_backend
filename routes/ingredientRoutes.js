const express = require("express");
const router = express.Router();
const { getAllIngredients } = require("../controllers/ingredientController");

router.get("/", getAllIngredients);

module.exports = router;
