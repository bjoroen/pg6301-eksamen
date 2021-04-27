require("dotenv").config();
const BodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const router = require("./googleAuth");
const ws = require("ws");

app.use(
  session({
    secret: "Ma864@43''as",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(BodyParser.json());
app.use(cookieParser());
app.use(router);

app.get("/api/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).send();
  }
  const { username, email } = req.user;
  userName = req.user.username;
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

//WS

const wsServer = new ws.Server({ noServer: true });
const sockets = [];
wsServer.on("connection", (socket) => {
  sockets.push(socket);
  console.log("client connected", socket);
  socket.on("message", (message) => {
    for (const socket of sockets) {
      socket.send(message);
    }
  });
});

const server = app.listen(3000, () => {
  console.log(`server started on http://localhost:${server.address().port}`);
  server.on("upgrade", (req, res, head) => {
    wsServer.handleUpgrade(req, res, head, (socket) => {
      wsServer.emit("connection", socket, req);
    });
  });
});
