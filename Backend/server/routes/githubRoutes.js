const express = require("express");
const router = express.Router();
const githubController = require("../controllers/githubController");

router.get("/github", githubController.githubAuth);
router.get(
  "/github/callback",
  githubController.githubCallback,
  githubController.githubRedirect
);

module.exports = router;
