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

router.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  console.log(user);
  res.json(user);
});

router.put("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
  const { username, password, email } = req.body;
  users[userIndex] = { username, password, email, id };
  console.log(req.body);
  res.status(200).end();
});

module.exports = router;
