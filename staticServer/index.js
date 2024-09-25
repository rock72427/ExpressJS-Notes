const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 5000;

// middleware
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "Home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "About.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "Login.html"));
});

app.get("/Home.css", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "css", "Home.css"));
});

app.get("/data", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "data", "data.json"));
});

app.post("/postdata", (req, res) => {
  console.log(req.body);
  res.send({ message: `Data Recieved` });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let users = JSON.parse(fs.readFileSync("./userData.json", "utf-8"));
  if (username && password) {
    users.push({ username, password });
    fs.writeFileSync("./userData.json", JSON.stringify(users));
    res.sendFile(path.join(__dirname, "public", "pages", "Home.html"));
  } else {
    res.send({ error: "provide all inputs" });
  }
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
