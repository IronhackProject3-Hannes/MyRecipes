const router = require("express").Router();
const Recipe = require("../models/Recipe");
const axios = require("axios");

// get all recipes from theMealdb
// router.get("/", (req, res, next) => {
//   const alphabets = "abcdefghijklmnopqrstuvwxyz";
//   let recipesFromDB = [];
//   let promises = [];
//   for (let i = 0; i < alphabets.length; i++) {
//     console.log(alphabets[i]);
//     promises.push(
//       axios
//         .get(
//           `https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabets[i]}`
//         )
//         .then((response) => {
//           recipesFromDB.push(response.data.meals);
//           res.json(response.data.meals);
//         })
//         .catch((err) => next(err))
//     );
//   }
//   Promise.all(promises).then(() => {
//     res.json(recipesFromDB);
//   });
// });

router.get("/", (req, res, next) => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => {
      const meals = response.data.meals;
      meals.forEach((meal) => {
        const {
          strMeal,
          strCategory,
          strArea,
          strInstructions,
          strMealThumb,
          strTags,
        } = meal;
        // make ingredient array from db
        let Ingredients = [];
        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            Ingredients.push({
              strIngredient: meal[`strIngredient${i}`],
              strMeasure: meal[`strMeasure${i}`],
            });
          }
        }
        console.log(Ingredients);

        // make recipe array from db
        let InstructionsArray = strInstructions
          .replace(/(\r\n|\n|\r)/gm, "")
          .split(".");
        const Instructions = [];
        for (let i = 0; i < InstructionsArray.length; i++) {
          if (InstructionsArray[i] !== "") {
            Instructions.push(InstructionsArray[i].trim());
          }
        }
        console.log(Instructions);

        //create the recipe to db from themealdb
        Recipe.create({
          strMeal,
          strCategory,
          strArea,
          Instructions,
          strMealThumb,
          strTags,
          Ingredients,
          creatorId: "theMealdb",
        })
          .then((recipe) => {
            // we return http status code 201 - created
            res.status(201).json(recipe);
          })
          .catch((err) => {
            next(err);
          });
      });
    })
    .catch((err) => next(err));
});

module.exports = router;
