const express = require("express");
const { studentRouter } = require("./routes/student.routes.js");
const { teacherRouter } = require("./routes/teacher.routes.js");
const app = express();
// middlewares
app.use(express.json()); // json data parsing

const port = 7777;

// routes
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
