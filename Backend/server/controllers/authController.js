const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "feqlpwid"; // Change this to a secure key

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  const hashedPassword = await bcrypt.hash(password, 5);
  try {
    const alreadyUser = await User.findOne({ email: email });
    if (alreadyUser) {
      // return res.redirect("/login");
      return res
        .status(200)
        .json({ success: false, message: "User already logged " });
    } else {
      // await User.create({
      //   username: username,
      //   email: email,
      //   password: hashedPassword,
      // });

      const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
      });

      const savedUser = await user.save();

      if (savedUser) {
        const payload = {
          username: savedUser.username,
          email: savedUser.email,
        };
        const options = { expiresIn: "10h" };

        return res.status(200).json({
          success: true,
          message: "User register successfully",
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Registeration not successful!",
          user: {},
        });
      }
      // return res.redirect("/login");
    }
  } catch (err) {
    console.log("error  = ", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      // return res.redirect("/login");
      return res
        .status(200)
        .json({ success: false, message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const payload = {
        username: user.username,
        email: user.email,
      };

      const options = { expiresIn: "19h" };

      const token = jwt.sign(payload, JWT_SECRET, options);

      // const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      //   expiresIn: "10h",
      // });

      // res.cookie("token", token, { httpOnly: true, secure: false });
      // res.redirect("/welcome");

      return res
        .status(200)
        .json({ success: true, message: "Login successfull", user: token });
    } else {
      // return res.send("Invalid User Credentials");
      return res
        .status(200)
        .json({ success: false, message: "Invalid User Credentials" });
    }
  } catch (err) {
    console.log("error", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

exports.authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

exports.welcome = (req, res) => {
  res.send(`Welcome to the Placement Bridge, ${req.user.email}!`);
};
