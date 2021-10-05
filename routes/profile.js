const router = require("express").Router();
const Recipe = require("../models/Recipe");
const User = require("../models/User");

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      const ids = user.favorite;
      Recipe.find({ _id: { $in: ids } })
        .then((favorites) => {
          console.log(favorites);
          res.status(200).json(favorites);
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

module.exports = router;
