const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const recipeSchema = new Schema({
  strMeal: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  strCategory: String,
  strArea: String,
  strInstructions: String,
  strMealThumb: String,
  Ingredients: [
    {
      strIngredient: String,
      strMeasure: String,
    },
  ],
  strTags: String,
});

const Recipe = model("recipe", recipeSchema);

module.exports = Recipe;
