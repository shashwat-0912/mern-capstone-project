const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use("/user", require("./routes/user"));

app.get("/", (req, res) => {
  res.send("Welcome to the capstone project");
});

app.listen(3010, () => {
  console.log("Connected");
  mongoose
    .connect("mongodb://localhost/capstone")
    .then((res) => {
      console.log("Database connected");
    })
    .catch((e) => {
      console.log("Database connected failed", e);
    });
});
