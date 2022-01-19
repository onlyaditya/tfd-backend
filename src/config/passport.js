require("dotenv").config();
const passport = require("passport");
const User = require("../models/user.model");

var GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
    }
  )
);

module.exports = passport;
