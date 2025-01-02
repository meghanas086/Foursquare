const user = require("../model/user");
const bcrypt = require("bcrypt");
const { MESSAGES } = require("../constants.js");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await user.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message:  MESSAGES.EMAIL_ADD});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new user({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: MESSAGES.USER_SUCCESS,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: MESSAGES.REGISTER_ERROR, error: error.message });
  }
};

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
      return res.status(404).json({ message:MESSAGES.USER_NOT_FOUND});
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: MESSAGES.INVALID_CRED });
    }

    const token = jwt.sign(
      { userId: foundUser._id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" }
    );

    console.log(MESSAGES.TOKEN, token);

    res.json({
      message: MESSAGES.LOGIN_SUCCESS,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MESSAGES.LOG_ERROR, error: error.message });
  }
};

module.exports = { register, login };
