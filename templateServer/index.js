const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// view engine setup
app.set("view engine", "ejs");

app.set("views", "public");

app.get("/", (req, res) => {
  res.render("Home", {
    name: "Rohit",
    age: 35,
    address: "Mumbai",
    fruits: ["apple", "grapes", "banana", "mango"],
  });
});

app.get("/about", (req, res) => {
  res.render("About", { msg: "It is a dynamic page created with EJS" });
});

const port = 7000;

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
