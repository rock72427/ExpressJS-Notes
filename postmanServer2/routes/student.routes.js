const express = require("express");
const studentRouter = express.Router();

// api
// demo
studentRouter.get("/", (req, res) => {
  res.send("Student router is working fine");
});

// post(add student)
studentRouter.post("/add", (req, res) => {
  const { name, age, email } = req.body;
  console.log(req.body);
});

module.exports = { studentRouter };
