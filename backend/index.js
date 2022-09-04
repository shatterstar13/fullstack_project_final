const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const colors = require("colors");
const Router = require("./Components/Routes/Route");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to Database Successfully`.blue.bold);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use(cors());

app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Port Connected, running on port ${PORT}`.yellow.bold);
});
