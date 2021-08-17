// Instantiate Express
const express = require("express");
const app = express();

// Set the port of our server
const port = 8000;

// Set a route for GET /
app.get("/", (req, res) => {
  res.json({ testData: "test" }).status(201);
});

// Start listening on a specific port
app.listen(port, () => console.log(`Example app listening on port ${port}`));
