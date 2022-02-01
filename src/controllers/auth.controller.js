const User = require("../models/user.model");
const generateToken = require("../config/generateToken");

const register = async (req, res) => {
  const body = req.body;

  try {
    const user = await User.create(body);
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(409).send("User already exist");
    }
    return res.status(500).send(e);
  }
};

const login = async (req, res) => {
  const message = "Invalid email or password";

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  
  if (!user) {
    return res.send(message);
  }

  const hashedPassword = await user.matchPassword(password);

  if (user && hashedPassword) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.profilePic,
      token: generateToken(user._id),
    });
  }
  return res.send(message);
};

module.exports = { register, login };
