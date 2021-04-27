const express = require("express");

const router = express.Router();

const users = [];

router.post("/api/login", (req, res) => {
  const { username, password, email } = req.body;
  users.push({ username, password, email, id: users.length + 1 });
  console.log(users);
  res.status(201);
  res.end();
});

router.get("/api/users", (req, res) => {
  res.json(users);
});

module.exports = router;
