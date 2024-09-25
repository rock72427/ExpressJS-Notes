const express = require("express");
const app = express();
const port = 5000;

// error-handling middleware
app.get("/", (req, res) => {
  throw "something went wrong";
});

app.use((error, req, res, next) => {
  res.send("service unavailable");
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
