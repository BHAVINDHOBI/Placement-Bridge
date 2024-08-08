const passport = require("passport");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "feqlpwid"; // Change this to a secure key
const CLIENT_URL = "http://localhost:5173/";

exports.githubAuth = passport.authenticate("github", { scope: ["user:email"] });

exports.githubCallback = passport.authenticate("github", {
  failureRedirect: "/login",
  failureMessage: "Failed to authenticate with GitHub",
});

exports.githubRedirect = async (req, res) => {
  try {
    // const token = jwt.sign(
    //   { id: req.user._id, email: req.user.email },
    //   JWT_SECRET,
    //   { expiresIn: "10h" }
    // );
    const payload = {
      username: req.user.username,
      email: req.user.email,
    };

    const options = { expiresIn: "10h" };

    const token = jwt.sign(payload, JWT_SECRET, options);

    console.log(req.user);

    // res.cookie("token", token, { httpOnly: true, secure: false });
    // res.redirect("/welcome");

    res.redirect(`${CLIENT_URL}?token=${token}`);
  } catch (err) {
    console.log(err);
  }
};
