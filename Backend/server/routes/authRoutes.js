const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const googleController = require("../controllers/googleController");
const githubController = require("../controllers/githubController");

// 
// router.get("/login", (req, res) => {
//   res.render("login", { showLogin: true });
// });

// router.get("/register", (req, res) => {
//   res.render("login", { showLogin: false });
// });

router.get(
  "/welcome",
  authController.authenticateToken,
  authController.welcome
);

// 

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/github", githubController.githubAuth);

router.get(
  "/github/callback",
  githubController.githubCallback,
  githubController.githubRedirect
);

router.get("/google", googleController.googleAuth);
router.get(
  "/google/callback",
  googleController.googleCallback,
  googleController.googleRedirect
);

module.exports = router;
