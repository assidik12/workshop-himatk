require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { loginService, registerService } = require("./service/authService");
const parser = require("body-parser");
const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());

// endpoint untuk render halaman login
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/view/login.html");
});

// endpoint untuk merender halaman register
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/view/register.html");
});

// endpoint API login
app.post("/auth/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
});

// endpoint API register
app.post("/auth/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const result = registerService(email, password);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
