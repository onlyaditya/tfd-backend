const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    // Check whether the eamil provided is already there in the database
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }

    user = await User.create(req.body);

    const token = newToken(user);

    return res.status(201).send({ user, token });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(400)
        .send({ message: "Email or password is incorrect" });
    }

    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res
        .status(400)
        .send({ message: "Email or password is incorrect" });
    }

    const token = newToken(user);

    return res.status(201).send({ user, token });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { register, login, newToken };
