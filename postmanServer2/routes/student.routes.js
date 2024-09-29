const express = require("express");
const {
  addStudent,
  getStudent,
  studentLogin,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller.js");
const studentRouter = express.Router();

// api
// demo
studentRouter.get("/", getStudent);

// post(add student)
studentRouter.post("/add", addStudent);

// login(student login)
studentRouter.post("/login", studentLogin);

studentRouter.put("/update", updateStudent);

// deleteStudent
studentRouter.delete("/delete/:id", deleteStudent);

module.exports = { studentRouter };
