const express = require("express");
const router = express.Router();
const googleController = require("../controllers/googleController");

router.get("/google", googleController.googleAuth);
router.get(
  "/google/callback",
  googleController.googleCallback,
  googleController.googleRedirect
);

module.exports = router;
