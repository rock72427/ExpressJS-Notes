import express from "express";
import cookieParser from "cookie-parser";
const app = express();

const port = 5000;

// middleware
app.use(express.json()); // to accept json data from client
app.use(express.urlencoded({ extended: true })); // to accept the url-encoded data from client forms
app.use(cookieParser()); // to parse the cookie data

// api(demo)
app.get("/", (req, res) => {
  res.status(200).json({ message: `Route is working fine` });
});

// post api(json data)
app.post("/data", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: `Post method is working fine` });
});

// post api(url data)
app.post("/url", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: `URL encoded data` });
});

// getAPI(headers)
app.get("/head", (req, res) => {
  console.log("hi");
  res.send(req.headers);
});

// postAPI(status code)
app.post("/status", (req, res) => {
  let userData = { username: "Rock", password: "password" };
  let { username, password } = req.body;
  if (!username) {
    return res
      .status(400)
      .json({ success: false, message: `Username is required` });
  } else if (!password) {
    return res
      .status(400)
      .json({ success: false, message: `Password is required` });
  } else {
    if (userData.username == username && userData.password == password) {
      res.status(200).json({ success: true, message: `Login Successfully` });
    } else {
      res
        .status(401)
        .json({ success: false, error: `User credentials is invalid` });
    }
  }
});

// postAPI(set cookie)
app.post("/cookie", (req, res) => {
  let { message } = req.body;
  res.cookie("msg", message);
  res.status(200).send({ message: "successfully set the cookie" });
});

// getAPI(get cookie)
app.get("/cookie", (req, res) => {
  res.status(200).json({ message: req.cookies.msg });
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
