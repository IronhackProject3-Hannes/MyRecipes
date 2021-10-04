const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const recipeSchema = new Schema({
  strMeal: {
    type: String,
    required: true,
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
  strTags: {
    type: String,
    required: true,
  },
  creatorId: {
    type: String,
    required: true,
  },
});

const Recipe = model("recipe", recipeSchema);

module.exports = Recipe;
