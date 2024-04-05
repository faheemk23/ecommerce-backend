const mongoose = require("mongoose");
const baseURI = process.env.MONGO_DB;

const database = "ecommerce";

const mongoURI =
  baseURI + database + "?retryWrites=true&w=majority&appName=neoG";

function initializeDatabase() {
  if (!baseURI) {
    console.log("missing mongoURI");
    return;
  }
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = { initializeDatabase };
