const express = require("express");
const app = express();
const port = 5000;

// router-middleware
const userRouter = express.Router();
app.use("/user", userRouter);

userRouter.get("/virat", (req, res) => {
  res.send({ name: "Virat", age: 20 });
});

userRouter.get("/rohit", (req, res) => {
  res.send({ name: "Rohit", age: 25 });
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
