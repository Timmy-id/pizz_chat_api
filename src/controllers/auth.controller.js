const User = require("../models/user.model");

const register = async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email | password) {
    res.status(400);
    throw new Error("Please enter all the required fields");
  }

  const user = await User.findOne({ email });

  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(400);
    throw new Error("Unable to create user");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
};

module.exports = { register, login };
