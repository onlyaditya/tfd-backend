const router = require("express").Router();
const passport = require("../config/passport");
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

router.get("", passport.authenticate("github"));

router.get(
  "/callback",
  passport.authenticate("github", {
    failureRedirect: "/auth/github/callback/failure",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    return res.status(201).json("it worked");
  }
);

router.get("/callback/failure", (req, res) => {
  return res.send("Failure");
});
module.exports = router;
