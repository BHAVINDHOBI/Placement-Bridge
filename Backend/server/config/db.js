const mongoose = require("mongoose");
require("dotenv").config();
const MongoDBURL = process.env.MongoDBUrl;

// mongoose
//   .connect(MongoDBURL)
//   .then(() => {
//     console.log("MongoDB connected successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MongoDBURL);
    console.log(" MongoDB connected succesfully ");
  } catch (err) {
    console.log("error in connecting Database = ", err);
  }
};
module.exports = connectDB;
