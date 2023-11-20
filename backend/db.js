const mongoose = require("mongoose");

var mongoUrl =
  "mongodb+srv://yaswanth:yaswanth123@mernproject.nkt6drd.mongodb.net/restaurant";

mongoose.connect(mongoUrl, {});

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Connection failed");
});

connection.on("connected", () => {
  console.log("Connected to Database");
});

module.exports = mongoose;
