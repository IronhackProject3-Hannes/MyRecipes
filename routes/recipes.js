const router = require("express").Router();
const Recipe = require("../models/Recipe");

// get all recipes
router.get("/", (req, res, next) => {
  Recipe.find()
    .then((recipes) => {
      console.log(recipes);
      res.status(200).json(recipes);
    })
    .catch((err) => next(err));
});

// create a recipe
router.post("/", (req, res, next) => {
  const { strMeal, strTags } = req.body;
  Recipe.create({
    strMeal,
    strTags,
  })
    .then((recipe) => {
      // we return http status code 201 - created
      res.status(201).json(recipe);
    })
    .catch((err) => {
      next(err);
    });
});

// get a specific recipe
router.get("/:id", (req, res, next) => {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      // check if the id is not valid
      // if (!mongoose.Types.ObjectId.isValid(req.params.id))

      if (!recipe) {
        res.status(404).json(recipe);
      } else {
        res.status(200).json(recipe);
      }
    })
    .catch((err) => {
      next(err);
    });
});

//update recipe
router.put("/:id", (req, res, next) => {
  const { strMeal, strTags } = req.body;
  Recipe.findByIdAndUpdate(
    req.params.id,
    { strMeal: strMeal, strTags: strTags },
    { new: true }
  )
    .then((updatedProject) => {
      res.status(200).json(updatedProject);
    })
    .catch((err) => next(err));
});

// delete a recipe
router.delete("/:id", (req, res, next) => {
  Recipe.findByIdAndDelete(req.params.id).then(() => {
    res.status(200).json({ message: "recipe deleted" });
  });
});

module.exports = router;
