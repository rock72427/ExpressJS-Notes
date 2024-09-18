const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./about.html"));
});

app.listen(PORT, hostname, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});
