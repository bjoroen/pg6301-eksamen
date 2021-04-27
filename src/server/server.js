require("dotenv").config();
const BodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");

//Refactor server code
app.use(
  session({
    secret: "Ma864@43''as",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(BodyParser.json());
app.use(cookieParser());

const router = require("./googleAuth");

app.use(router);

app.get("/api/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).send();
  }
  const { username, email } = req.user;
  res.json({ username, email });
});

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
  } else {
    next();
  }
});

const server = app.listen(3000, () => {
  console.log(`server started on http://localhost:${server.address().port}`);
});
