const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    calories: Number,
    proteins: Number,
    fat: Number,
    carbohydrates: Number,
    image: String,
    image_large: String,
});

module.exports = mongoose.model('Ingredient', ingredientSchema);