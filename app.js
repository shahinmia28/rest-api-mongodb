const express = require("express");
const cors = require("cors");
const userRouter = require("./route/user.router");
require("./config/db");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// Route not found error
app.use((req, res, next) => {
  res.status(404).send("<h2>Ops! 404 page not found</h2>");
});
// Server error
app.use((err, req, res, next) => {
  res.status(500).send("<h2>Ops! 500 server broke</h2>");
});
module.exports = app;
