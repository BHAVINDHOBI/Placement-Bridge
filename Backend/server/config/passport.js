const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/User");
const JWT_SECRET = "feqlpwid"; // Change this to a secure key
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, callback) => {
      try {
        const existingUser = await User.findOne({
          $or: [{ googleId: profile.id }, { email: profile.emails[0].value }],
        });

        if (existingUser) {
          existingUser.googleId = profile.id;
          existingUser.username = profile.displayName;
          existingUser.email = profile.emails[0].value;
          await existingUser.save();

          callback(null, existingUser);
        } else {
          const newUser = new User({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
            password: "google",
          });

          await newUser.save();
          callback(null, newUser);
        }
      } catch (error) {
        console.error("Error in Google Strategy:", error);
        callback(error, null);
      }
    }
  )
);

// GitHub Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, callback) => {
      try {
        const existingUser = await User.findOne({
          $or: [{ githubId: profile.id }, { email: profile.emails[0].value }],
        });

        if (existingUser) {
          existingUser.githubId = profile.id;
          existingUser.username = profile.displayName;
          existingUser.email = profile.emails[0].value;
          await existingUser.save();

          callback(null, existingUser);
        } else {
          const newUser = new User({
            githubId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
            password: "github",
          });

          await newUser.save();
          callback(null, newUser);
        }
      } catch (error) {
        console.error("Error in GitHub Strategy:", error);
        callback(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
