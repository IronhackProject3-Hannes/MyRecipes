const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local", {
    passReqToCallback: true,
  })
);

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (password.length < 4) {
    res.status(400).json({ message: "Your password needs to be 4 chars min" });
    return;
  }
  if (username.length === 0) {
    res.status(400).json({ message: "Username cannot be empty" });
    return;
  }
  User.findOne({ username: username }).then((userFromDB) => {
    if (userFromDB !== null) {
      res.status(400).json({ message: "Username is already taken" });
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);
      User.create({ username: username, password: hash })
        .then((createdUser) => {
          req.session.user = createdUser;
          res.status(200).json(createdUser);
        })
        .catch((err) => {
          next(err);
        });
    }
  });
});

router.get("/loggedin", (req, res, next) => {
  console.log(
    "this is the logged in user from the session: ",
    req.session.user
  );
  const user = req.session.user;
  res.json(user);
});

router.delete("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ message: "successful logout" });
    }
  });
});

module.exports = router;
