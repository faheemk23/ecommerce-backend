const { initializeDatabase } = require("./db.cjs");
const express = require("express");

const app = express();
initializeDatabase();

app.get("/", (req, res) => {
  res.send(`Welcome to faheem's app`);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
