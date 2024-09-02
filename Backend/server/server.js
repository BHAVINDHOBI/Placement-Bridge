const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
connectDB();
require("./config/passport");

const app = express();
const PORT = 8082;

app.use(
  cors({
    origin: "https://placement-bridge.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use(
  session({
    secret: "ngnerrgm",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require("./routes/authRoutes");
// const googleRoutes = require("./routes/googleRoutes");
// const githubRoutes = require("./routes/githubRoutes");

app.use("/auth", authRoutes);
// app.use("/auth", googleRoutes);
// app.use("/auth", githubRoutes);

app.listen(PORT, () => console.log(`The server is running on ${PORT}`));
